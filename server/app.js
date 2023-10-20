const express=require('express');

const PORT=8000;

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//db
const connectdb=require('./db/connection')
connectdb();

//routes
app.use('/api/auth',require('./routes/auth'))
//server
app.listen(PORT,()=>{
console.log(`Server started on ${PORT}`);

})