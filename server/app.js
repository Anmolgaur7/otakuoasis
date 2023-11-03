const express=require('express');
const cors =require('cors');
const PORT=8000;

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

//db
const connect =require('./db/connection');
connect()

//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/products',require('./routes/products'))
app.use('/api/payment',require('./routes/payment'))
app.use('/api/orders',require('./routes/order'))
//server
app.listen(PORT,()=>{
console.log(`Server started on ${PORT}`);

})