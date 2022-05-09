const express = require('express');

const router= express.Router();

const {getStockInformation}=require('../helper/getStockInformation');
const {listAStocks}=require('../stocks/AStocks');

router.get('/stockInformation',(req,res)=>{
    const stockSymbol=req.query.stock;
    const stockInformation=getStockInformation(stockSymbol);
    res.json({
        marketCap:stockInformation.marketCap,
        volume:stockInformation.volume,
        avgVolume:stockInformation.avgVolume,
        weekHigh52:stockInformation.weekHigh52,
        weekLow52:stockInformation.weekLow52,
        openPrice:stockInformation.openPrice
    })
});

router.get('/stockPrice',(req,res)=>{
    listAStocks();
    res.json({hit:"hit"});
});

module.exports = router;