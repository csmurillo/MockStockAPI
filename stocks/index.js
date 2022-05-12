const {listALivePrice,listAStocksDayHistory,listAStocksWeekHistory,listAStocksMonthHistory}=require('./AStocks');
const {listBStocks,listBLivePrice}=require('./BStocks');
const {listCStocks,listCLivePrice}=require('./CStocks');
const {listDStocks,listDLivePrice}=require('./DStocks');
const {listEStocks,listELivePrice}=require('./EStocks');
const {listFStocks,listFLivePrice}=require('./FStocks');
const {listGStocks,listGLivePrice}=require('./GStocks');
const {listHStocks,listHLivePrice}=require('./HStocks');
const {listIStocks,listILivePrice}=require('./IStocks');
const {listJStocks,listJLivePrice}=require('./JStocks');
const {listKStocks,listKLivePrice}=require('./KStocks');
const {listLStocks,listLLivePrice}=require('./LStocks');
const {listMStocks,listMLivePrice}=require('./MStocks');
const {listNStocks,listNLivePrice}=require('./NStocks');
const {listOStocks,listOLivePrice}=require('./OStocks');
const {listPStocks,listPLivePrice}=require('./PStocks');
const {listQStocks,listQLivePrice}=require('./QStocks');
const {listRStocks,listRLivePrice}=require('./RStocks');
const {listSStocks,listSLivePrice}=require('./SStocks');
const {listTStocks,listTLivePrice}=require('./TStocks');
const {listUStocks,listULivePrice}=require('./UStocks');
const {listVStocks,listVLivePrice}=require('./VStocks');
const {listWStocks,listWLivePrice}=require('./WStocks');
const {listXStocks,listXLivePrice}=require('./XStocks');
const {listYStocks,listYLivePrice}=require('./YStocks');
const {listZStocks,listZLivePrice}=require('./ZStocks');

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
        return listBStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='c'){
        return listCStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='d'){
        return listDStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='e'){
        return listEStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='f'){
        return listFStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='g'){
        return listGStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='h'){
        return listHStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='i'){
        return listIStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='j'){
        return listJStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='k'){
        return listKStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='l'){
        return listLStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='m'){
        return listMStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='n'){
        return listNStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='o'){
        return listOStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='p'){
        return listPStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='q'){
        return listQStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='r'){
        return listRStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='s'){
        return listSStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='t'){
        return listTStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='u'){
        return listUStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='v'){
        return listVStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='w'){
        return listWStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='x'){
        return listXStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='y'){
        return listYStocks();
    }
    else if(stockSymbol[0].toLowerCase()=='z'){
        return listZStocks();
    }
}
// function getStocksWeekMovement(stockSymbol){
//     console.log('inside'+stockSymbol);
//     if(stockSymbol[0].toLowerCase()=='a'){
//         return listAStocksDayHistory();
//     }
//     else if(stockSymbol[0].toLowerCase()=='b'){
//         return listBStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='c'){
//         return listCStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='d'){
//         return listDStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='e'){
//         return listEStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='f'){
//         return listFStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='g'){
//         return listGStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='h'){
//         return listHStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='i'){
//         return listIStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='j'){
//         return listJStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='k'){
//         return listKStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='l'){
//         return listLStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='m'){
//         return listMStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='n'){
//         return listNStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='o'){
//         return listOStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='p'){
//         return listPStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='q'){
//         return listQStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='r'){
//         return listRStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='s'){
//         return listSStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='t'){
//         return listTStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='u'){
//         return listUStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='v'){
//         return listVStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='w'){
//         return listWStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='x'){
//         return listXStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='y'){
//         return listYStocks();
//     }
//     else if(stockSymbol[0].toLowerCase()=='z'){
//         return listZStocks();
//     }
// }
// function getStocksMonthMovement(stockSymbol){

// }
module.exports={getStocksDayMovement,getStockLivePrice}
