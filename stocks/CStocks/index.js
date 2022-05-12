const CStocksDay=require('./DayMovementStocks.json');
const CStocksWeek=require('./WeekMovementStocks.json');
const CStocksMonth=require('./MonthMovementStocks.json');

function listCLivePrice(){
    
    let liveTime=new Date();
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());
    let stockValues=CStocksDay.values;

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
    }
    return livePriceData;
}

function listCStocksDayHistory(){
    let liveTime=new Date();
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());

    let stockValues=CStocksDay.values;

    let currentLivePrice={
        "meta":{"symbol":"A"},
        "values":[]
    }

    for(let i=0; i<stockValues.length;i++){
        let timeStr=stockValues[i].datetime.split(' ')[1];
        let time=timeStr.split(':');
        let hour=parseInt(time[0]);
        let minutes=parseInt(time[1]);
        liveHour=14;
        if(hour<liveHour){
            currentLivePrice.values.push({datetime:stockValues[i].datetime,open:stockValues[i].open})
        }
    }
    // console.log('currentLivePrice');
    // console.log(currentLivePrice);
    // console.log('----------------');
    return currentLivePrice;
}
function listCStocksWeekHistory(){
    return CStocksWeek;
}
function listCStocksMonthHistory(){
    return CStocksMonth;
}

module.exports={ listCLivePrice, listCStocksDayHistory, listCStocksWeekHistory, listCStocksMonthHistory };
