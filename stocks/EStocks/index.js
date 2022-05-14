const EStocksDay=require('./DayMovement.json');
const EStocksWeek=require('./WeekMovement.json');
const EStocksMonth=require('./MonthMovement.json');

function listELivePrice(){
    
    let liveTime=new Date();
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());
    let stockValues=EStocksDay.values;

    let livePriceData={
        price:'',
        changePrice:'',
        changePricePercentage:''
    };
    for(let i=0; i<stockValues.length;i++){
        let timeStr=stockValues[i].datetime.split(' ')[1];
        let time=timeStr.split(':');
        let hour=parseInt(time[0]);
        let minutes=parseInt(time[1]);

        if(liveHour==hour&&liveMinutes<minutes){
            livePriceData.price=stockValues[i].open;
            livePriceData.changePrice=stockValues[i].open-stockValues[i+1].open;
            livePriceData.changePricePercentage=livePriceData.changePrice/livePriceData.price;
            break;
        }
        else if(liveHour>hour){
            livePriceData.price=stockValues[i].open;
            livePriceData.changePrice=(parseFloat(stockValues[i].open).toFixed(2)-parseFloat(stockValues[i+1].open).toFixed(2)).toFixed(2);
            livePriceData.changePricePercentage=parseFloat(livePriceData.changePrice/livePriceData.price).toFixed(4);
            break;
        }
        else if(liveHour<9){
            livePriceData.price=stockValues[i].open;
            livePriceData.changePrice=(parseFloat(stockValues[i].open).toFixed(2)-parseFloat(stockValues[i+1].open).toFixed(2)).toFixed(2);
            livePriceData.changePricePercentage=parseFloat(livePriceData.changePrice/livePriceData.price).toFixed(4);
            break;
        }
    }
    return livePriceData;
}

function listEStocksDayHistory(){
    let liveTime=new Date();
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());

    let stockValues=EStocksDay.values;

    let currentLivePrice={
        "meta":{"symbol":"E"},
        "values":[]
    }

    for(let i=0; i<stockValues.length;i++){
        let timeStr=stockValues[i].datetime.split(' ')[1];
        let time=timeStr.split(':');
        let hour=parseInt(time[0]);
        let minutes=parseInt(time[1]);

        if(hour<=liveHour){
            if(hour==liveHour){
                if(minutes<=liveMinutes){
                    currentLivePrice.values.push({datetime:stockValues[i].datetime,open:stockValues[i].open})
                }
            }
            else{
                currentLivePrice.values.push({datetime:stockValues[i].datetime,open:stockValues[i].open})
            }
        }
        else if(liveHour<9){
            currentLivePrice.values.push({datetime:stockValues[i].datetime,open:stockValues[i].open})
        }
    }
    return currentLivePrice;
}
function listEStocksWeekHistory(){
    return EStocksWeek;
}
function listEStocksMonthHistory(){
    return EStocksMonth;
}

module.exports={ listELivePrice, listEStocksDayHistory, listEStocksWeekHistory, listEStocksMonthHistory };
