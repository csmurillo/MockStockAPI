const stocksInfo=[
    {
        "marketCap": "139.48M",
        "volume": "2.52M",
        "avgVolume": "2.11M",
        "weekHigh52": 13.21,
        "weekLow52": 2.87,
        "openPrice": 3.2
    },
    {
        "marketCap": "80M",
        "volume": "1.1M",
        "avgVolume": "950K",
        "weekHigh52": 5.9,
        "weekLow52": 2.3,
        "openPrice": 4.2
    },
    {
        "marketCap": "200M",
        "volume": "11M",
        "avgVolume": "9.8M",
        "weekHigh52": 45,
        "weekLow52": 38,
        "openPrice": 44
    }
];

function getStockInformation(stockSymbol){
    console.log(stockSymbol);
    const RANDOM_NUMBER=Math.floor(Math.random()*3);
    return stocksInfo[RANDOM_NUMBER];
}


module.exports={getStockInformation};