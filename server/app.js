const express=require('express');

const PORT=8000;

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//db
const connect =require('./db/connection');
connect()

//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/products',require('./routes/products'))
//server
app.listen(PORT,()=>{
console.log(`Server started on ${PORT}`);

})