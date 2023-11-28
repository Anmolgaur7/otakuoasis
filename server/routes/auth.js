const express = require('express')
const User = require('../models/users')
const bycrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const router = express.Router()

router.get('/all', (_req, res) => {
    try {
        const users = User.find();
        res.json(users)   
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/register', async(req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" })
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: "Password should be  consist of 6 words" })
        }

        const isexist = await User.findOne({ email })
        if (isexist) {
            return res.status(400).json({ msg: "User already exists" })
        }

        const newuser = new User({
            name,
            email,
            password
        })
    bycrypt.genSalt(10,(_err,salt)=>{
        bycrypt.hash(newuser.password,salt,async(err,hash)=>{
         if(err)throw err;
         newuser.password=hash;
         const saveduser=await newuser.save();
          res.json({
            id:saveduser.id,
            name:saveduser.name,
            email:saveduser.email
          });
        });
    });


    } catch (error) {
      res.status(400).json({error:error.message})
    }
})

router.post('/login', async (req, res, _next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).send("Fill all fields")
        }
        else {
            const user = await User.findOne({ email })
            if (!user) {
                res.status(400).send("User or password is wrong")
            }
            else {
                const validateuser = await bycrypt.compare(password, user.password)
                if (!validateuser) {
                    res.status(400).send("User or password is wrong")
                }
                else {
                    const payload = {
                        userId: user._id,
                        userEmail: user.email
                    }
                    const jwtkey = 'this_is_a_secret_key_which_doesnt_need_to_be_exposed'
                    jwt.sign(payload, jwtkey, {
                        expiresIn: 84600
                    }, async (_err, token) => {
                        await User.updateOne({ _id: user.id, }, {
                            $set: { token }
                        })
                        user.save()
                        return res.status(200).json({ user: { name: user.name, email: user.email, id: user.id,role:user.role}, token: token })
                    })
                }
            }
        }

    } catch (error) {
        console.error(error)
    }
})

// router.get('/logout', async (req, res, next) => {
//     try {
//         const user = await User.findOne({ token: req.headers.authorization })
//         if (!user) {
//             res.status(400).send("User not found")
//         }
//         else {
//             await User.updateOne({ _id: user.id, }, {
//                 $set: { token: null }
//             })
//             user.save()
//             res.status(200).send("User logged out")
//         }
//     } catch (error) {
//         console.error(error)
//     }
// })
module.exports = router