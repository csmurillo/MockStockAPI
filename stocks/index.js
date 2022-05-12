const {listALivePrice,listAStocksDayHistory,listAStocksWeekHistory,listAStocksMonthHistory}=require('./AStocks');
const {listBLivePrice,listBStocksDayHistory,listBStocksWeekHistory,listBStocksMonthHistory}=require('./BStocks');
const {listCLivePrice,listCStocksDayHistory,listCStocksWeekHistory,listCStocksMonthHistory}=require('./CStocks');
const {listDLivePrice,listDStocksDayHistory,listDStocksWeekHistory,listDStocksMonthHistory}=require('./DStocks');
const {listELivePrice,listEStocksDayHistory,listEStocksWeekHistory,listEStocksMonthHistory}=require('./EStocks');
const {listFLivePrice,listFStocksDayHistory,listFStocksWeekHistory,listFStocksMonthHistory}=require('./FStocks');
const {listGLivePrice,listGStocksDayHistory,listGStocksWeekHistory,listGStocksMonthHistory}=require('./GStocks');
const {listHLivePrice,listHStocksDayHistory,listHStocksWeekHistory,listHStocksMonthHistory}=require('./HStocks');
const {listILivePrice,listIStocksDayHistory,listIStocksWeekHistory,listIStocksMonthHistory}=require('./IStocks');
const {listJLivePrice,listJStocksDayHistory,listJStocksWeekHistory,listJStocksMonthHistory}=require('./JStocks');
const {listKLivePrice,listKStocksDayHistory,listKStocksWeekHistory,listKStocksMonthHistory}=require('./KStocks');
const {listLLivePrice,listLStocksDayHistory,listLStocksWeekHistory,listLStocksMonthHistory}=require('./LStocks');
const {listMLivePrice,listMStocksDayHistory,listMStocksWeekHistory,listMStocksMonthHistory}=require('./MStocks');
const {listNLivePrice,listNStocksDayHistory,listNStocksWeekHistory,listNStocksMonthHistory}=require('./NStocks');
const {listOLivePrice,listOStocksDayHistory,listOStocksWeekHistory,listOStocksMonthHistory}=require('./OStocks');
const {listPLivePrice,listPStocksDayHistory,listPStocksWeekHistory,listPStocksMonthHistory}=require('./PStocks');
const {listQLivePrice,listQStocksDayHistory,listQStocksWeekHistory,listQStocksMonthHistory}=require('./QStocks');
const {listRLivePrice,listRStocksDayHistory,listRStocksWeekHistory,listRStocksMonthHistory}=require('./RStocks');
const {listSLivePrice,listSStocksDayHistory,listSStocksWeekHistory,listSStocksMonthHistory}=require('./SStocks');
const {listTLivePrice,listTStocksDayHistory,listTStocksWeekHistory,listTStocksMonthHistory}=require('./TStocks');
const {listULivePrice,listUStocksDayHistory,listUStocksWeekHistory,listUStocksMonthHistory}=require('./UStocks');
const {listVLivePrice,listVStocksDayHistory,listVStocksWeekHistory,listVStocksMonthHistory}=require('./VStocks');
const {listWLivePrice,listWStocksDayHistory,listWStocksWeekHistory,listWStocksMonthHistory}=require('./WStocks');
const {listXLivePrice,listXStocksDayHistory,listXStocksWeekHistory,listXStocksMonthHistory}=require('./XStocks');
const {listYLivePrice,listYStocksDayHistory,listYStocksWeekHistory,listYStocksMonthHistory}=require('./YStocks');
const {listZLivePrice,listZStocksDayHistory,listZStocksWeekHistory,listZStocksMonthHistory}=require('./ZStocks');

function getStockLivePrice(stockSymbol){
    // console.log('inside'+stockSymbol);
    if(stockSymbol[0].toLowerCase()=='a'){
        return listALivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='b'){
        return listBLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='c'){
        return listCLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='d'){
        return listDLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='e'){
        return listELivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='f'){
        return listFLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='g'){
        return listGLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='h'){
        return listHLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='i'){
        return listILivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='j'){
        return listJLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='k'){
        return listKLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='l'){
        return listLLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='m'){
        return listMLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='n'){
        return listNLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='o'){
        return listOLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='p'){
        return listPLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='q'){
        return listQLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='r'){
        return listRLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='s'){
        return listSLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='t'){
        return listTLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='u'){
        return listULivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='v'){
        return listVLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='w'){
        return listWLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='x'){
        return listXLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='y'){
        return listYLivePrice();
    }
    else if(stockSymbol[0].toLowerCase()=='z'){
        return listZLivePrice();
    }
    
}

function getStocksDayMovement(stockSymbol){
    console.log('inside'+stockSymbol);
    if(stockSymbol[0].toLowerCase()=='a'){
        return listAStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='b'){
        return listBStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='c'){
        return listCStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='d'){
        return listDStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='e'){
        return listEStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='f'){
        return listFStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='g'){
        return listGStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='h'){
        return listHStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='i'){
        return listIStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='j'){
        return listJStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='k'){
        return listKStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='l'){
        return listLStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='m'){
        return listMStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='n'){
        return listNStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='o'){
        return listOStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='p'){
        return listPStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='q'){
        return listQStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='r'){
        return listRStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='s'){
        return listSStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='t'){
        return listTStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='u'){
        return listUStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='v'){
        return listVStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='w'){
        return listWStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='x'){
        return listXStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='y'){
        return listYStocksDayHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='z'){
        return listZStocksDayHistory();
    }
}
// 
function getStocksWeekMovement(stockSymbol){
    console.log('inside'+stockSymbol);
    if(stockSymbol[0].toLowerCase()=='a'){
        return listAStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='b'){
        return listBStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='c'){
        return listCStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='d'){
        return listDStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='e'){
        return listEStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='f'){
        return listFStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='g'){
        return listGStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='h'){
        return listHStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='i'){
        return listIStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='j'){
        return listJStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='k'){
        return listKStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='l'){
        return listLStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='m'){
        return listMStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='n'){
        return listNStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='o'){
        return listOStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='p'){
        return listPStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='q'){
        return listQStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='r'){
        return listRStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='s'){
        return listSStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='t'){
        return listTStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='u'){
        return listUStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='v'){
        return listVStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='w'){
        return listWStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='x'){
        return listXStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='y'){
        return listYStocksWeekHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='z'){
        return listZStocksWeekHistory();
    }
}
// 
function getStocksMonthMovement(stockSymbol){
    if(stockSymbol[0].toLowerCase()=='a'){
        return listAStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='b'){
        return listBStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='c'){
        return listCStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='d'){
        return listDStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='e'){
        return listEStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='f'){
        return listFStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='g'){
        return listGStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='h'){
        return listHStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='i'){
        return listIStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='j'){
        return listJStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='k'){
        return listKStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='l'){
        return listLStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='m'){
        return listMStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='n'){
        return listNStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='o'){
        return listOStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='p'){
        return listPStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='q'){
        return listQStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='r'){
        return listRStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='s'){
        return listSStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='t'){
        return listTStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='u'){
        return listUStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='v'){
        return listVStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='w'){
        return listWStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='x'){
        return listXStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='y'){
        return listYStocksMonthHistory();
    }
    else if(stockSymbol[0].toLowerCase()=='z'){
        return listZStocksMonthHistory();
    }
}
// 
module.exports={getStockLivePrice,getStocksDayMovement,getStocksWeekMovement,getStocksMonthMovement}
