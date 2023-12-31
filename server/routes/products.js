const express = require('express')
const router = express.Router()

const Product = require('../models/products')


router.post('/add', async (req, res) => {
    try {
    const {name,Price,description,Anime,image,featured} = req.body;
    //simple validation
    if (!name || !Price || !description || !Anime || !image || !featured) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }
    
    //check for existing product
    const isexist=await Product.findOne({name})

    if(isexist){
        return res.status(400).json({msg:"Product already exists"})
        alert("Product already exists")
    }
    const newproduct=new Product({
      ...req.body
    })
    const savedproduct=await newproduct.save()
    res.json(savedproduct)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/all',async(req,res)=>{
    try {
        const {sort}=req.query;
        const products=await Product.find({
         ...(sort==='featured'&&{featured:true})  
        }).sort({
            Price:sort==='asc'?1:sort==='dsc'?-1:0
        })
        res.json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
} 
)

router.get('/all/count',async(req,res)=>{
    try {
        const products=await Product.find();
        res.json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(400).json({msg:"Product not found"})
        }
        await product.deleteOne(product) 
        res.status(200).json({msg:"Product deleted successfully"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/search',async(req,res)=>{
    try {
        const {name}=req.query;
        const products=await Product.find({name:{$regex:name,$options:'i'}})
        res.json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    try {
        const {Anime,sort}=req.query;
        const isarray=Array.isArray(Anime);
        const products=await Product.find({
         ...(isarray?{Anime:{$in:Anime}}:{Anime}),
         ...(sort==='featured'&&{featured:true})  
        }).sort({
            Price:sort==='asc'?1:sort==='dsc'?-1:0
        })
        res.json(products)
    } 
    catch (error) {
        res.status(400).json({error:error.message})
    }
});

router.get('/related/:id',async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(400).json({msg:"Product not found"})
        }
        const products=await Product.find({_id:{$ne:product._id}}).limit(3);
        res.json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/:id',async(req,res)=>{ 
    try {
        const product=await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
});

module.exports = router