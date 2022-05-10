const express = require('express');

const router= express.Router();

const {getStockInformation}=require('../helper/getStockInformation');
const {getStocks,getStockLivePrice}=require('../stocks');

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
    res.json(getStocks(req.query.stock));
    // res.json({hit:"hit"});
});

router.get('/stockLivePrice',(req,res)=>{
    res.json(getStockLivePrice(req.query.stock));
});

module.exports = router;