const express = require('express')
const router = express.Router()

const Product = require('../models/products')

router.get('/', (req, res) => {
    res.send('product Route')
})

router.post('/add', async (req, res) => {
    try {
    const {name,price,description,anime,image,featured} = req.body;
    
    if (!name || !price || !description || !anime || !image || !featured) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }
    
    //check for existing product
    const isexist=await Product.findOne({name})

    if(isexist){
        return res.status(400).json({msg:"Product already exists"})
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
        const products=await Product.find()
        res.json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
module.exports = router