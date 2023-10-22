const mongoose=require('mongoose')
const URI='mongodb+srv://anmolgaur26:N6kw3cvS2S4bxPTJ@cluster0.muxxyfc.mongodb.net/?retryWrites=true&w=majority'

const connectdb=async ()=>{
    try {
        await mongoose.connect(URI,{
         useNewUrlParser:true,
          useUnifiedTopology:true
        });
        console.log("db connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports=connectdb