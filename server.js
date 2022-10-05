const schedule = require('node-schedule');
const {spawn} = require('child_process');

const express =require('express');
const app = express();

const PORT = process.env.PORT||3005;

// routes
const stockRoutes=require('./routes/stock');

// middleware
app.use('/api',stockRoutes);

app.listen(PORT,()=>{
    console.log('listening in '+PORT);
});

// run code from monday to friday at 12am
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 5)];
rule.hour = 0;
rule.minute = 0;
rule.tz='Asia/Tashkent';


const job = schedule.scheduleJob(rule, function(){
    runPython();
    console.log('new york time hit!');
});

function runPython(){
    const python = spawn('python', ['dateTime.py']);

    python.stdout.on('data',function (data){
        console.log('data'+data);
        console.log('---------');
    });

    python.on('close', (code)=>{
        console.log(`child process closed ${code}`);
    })
}
