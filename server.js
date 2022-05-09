
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