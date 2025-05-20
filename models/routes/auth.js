const express =require('express');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const User =require('../models/User');

const router = express.Router();
exports.router = router;
router.post('/register',async(req,res)=>{ 
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
        } catch (err){
            res.status(400).json({ error:err.message}); 
            }
            });
            router.post('/login',async(req)=>{
                try {
                    const{username,pasword} = req.body;
                    const user = await User.findOne({ username});
                    if(!user || !await bcrypt.compare(password,user.password)) {
                        return res.status(401).json({message:"Invalid credentials"});
                        }
                        const token= jwt.sign({id: user._id },process.env.JWT_SECRET,{expiresIn:'1h'});
                        res.json({token});
                        
                        } catch(err){
                            res.status(400).json({error:err.message});
                        }
                        
                        });
