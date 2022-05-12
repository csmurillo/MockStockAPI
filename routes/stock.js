const express = require('express');

const router= express.Router();

const {getStockInformation}=require('../helper/getStockInformation');
const {getStockLivePrice,getStocksDayMovement,getStocksWeekMovement,getStocksMonthMovement}=require('../stocks');

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

router.get('/stockLivePrice',(req,res)=>{
    res.json(getStockLivePrice(req.query.stock));
});

router.get('/stockDayHistory',(req,res)=>{
    res.json(getStocksDayMovement(req.query.stock));
});
router.get('stockWeekHistory',(req,res)=>{
    res.json(getStocksWeekMovement(req.query.stock));
});
router.get('/stockMonthHistory',(req,res)=>{
    res.json(getStocksMonthMovement(req.query.stock));
});


module.exports = router;
