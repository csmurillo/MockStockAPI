const GStocksDay=require('./DayMovement.json');
const GStocksWeek=require('./WeekMovement.json');
const GStocksMonth=require('./MonthMovement.json');
const { randomLivePrice }=require('../../helper/randomLivePrice');

function listGLivePrice(){
    // testing
    const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'Australia/Brisbane' });
    // const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'Australia/Brisbane' });
    const liveTime = new Date(newYorkDate);
    // const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    // const liveTime = new Date(newYorkDate);
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());
    let liveSeconds=parseInt(liveTime.getSeconds());
    let stockValues=GStocksDay.values;

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
        let seconds=parseInt(time[2]);


        if(liveHour<9||liveHour==9 && liveMinutes<30||liveHour>16){
            livePriceData.price=stockValues[i].open;
            livePriceData.changePrice=(parseFloat(stockValues[i].open).toFixed(2)-parseFloat(stockValues[i+1].open).toFixed(2)).toFixed(2);
            livePriceData.changePricePercentage=parseFloat(livePriceData.changePrice/livePriceData.price).toFixed(4);
            break;
        }
        // set actual live open price from day movement datetime
        else if(liveHour==hour&&liveMinutes%5==0&&liveMinutes==minutes&&seconds==0&&liveSeconds<15){
            livePriceData.price=stockValues[i].open;
            livePriceData.changePrice=parseFloat(stockValues[i].open-stockValues[i-1].open).toFixed(2);
            livePriceData.changePricePercentage=parseFloat(livePriceData.changePrice/livePriceData.price).toFixed(3);
            break;
        }
        // set random live price for datetime that are between actual day movement datetimes
        else if(liveHour==hour&&liveMinutes>=minutes){
            let livePriceRandom=randomLivePrice(stockValues[i-1].open, stockValues[i].open);
            livePriceData.price=livePriceRandom;
            livePriceData.changePrice=parseFloat(stockValues[i].open-livePriceRandom).toFixed(3);
            livePriceData.changePricePercentage=parseFloat(livePriceData.changePrice/livePriceData.price).toFixed(4);
            break;
        }
    }
    return livePriceData;
}

function listGStocksDayHistory(){
    // testing
    const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'Australia/Brisbane' });
    // const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'Japan' });
    const liveTime = new Date(newYorkDate);
    // const newYorkDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    // const liveTime = new Date(newYorkDate);
    let liveHour=parseInt(liveTime.getHours());
    let liveMinutes=parseInt(liveTime.getMinutes());
    let stockValues=GStocksDay.values;

    console.log('hour'+liveHour+'minutes'+liveMinutes);

    let currentLivePrice={
        "meta":{"symbol":"G"},
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
        else if(liveHour<9||liveHour==9 && liveMinutes<30){
            currentLivePrice.values.push({datetime:stockValues[i].datetime,open:stockValues[i].open})
        }
    }
    return currentLivePrice;
}

function listGStocksWeekHistory(){
    return GStocksWeek;
}
function listGStocksMonthHistory(){
    return GStocksMonth;
}

module.exports={ listGLivePrice, listGStocksDayHistory, listGStocksWeekHistory, listGStocksMonthHistory };
