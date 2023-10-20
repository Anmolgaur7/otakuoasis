const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
res.send('App Route')
})

router.post('/register',(req,res)=>{
try {
const {name,email,password}=req.body;
if(!name||!email||!password){
return res.status(400).json({msg:"Please enter all fields"})
}
if(password.length<6){
    return res.status(400).json({msg:"Password should be  consist of 6 words"})
    }
} catch (error) {
    
}
})
module.exports=router