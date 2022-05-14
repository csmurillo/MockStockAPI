const KStocksDay=require('./DayMovement.json');
const KStocksWeek=require('./WeekMovement.json');
const KStocksMonth=require('./MonthMovement.json');

function listKLivePrice(){
    
    const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const liveTime = new Date(newYorkDate);
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());
    let stockValues=KStocksDay.values;

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

function listKStocksDayHistory(){
    const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const liveTime = new Date(newYorkDate);
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());

    let stockValues=KStocksDay.values;

    let currentLivePrice={
        "meta":{"symbol":"K"},
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
function listKStocksWeekHistory(){
    return KStocksWeek;
}
function listKStocksMonthHistory(){
    return KStocksMonth;
}

module.exports={ listKLivePrice, listKStocksDayHistory, listKStocksWeekHistory, listKStocksMonthHistory };
