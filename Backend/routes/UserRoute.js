const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('../model/Usermodel')

const router = express.Router();

// get

router.get('/',async (req,res)=>{
    const showAll = await User.find();
    res.status(200).json(showAll);

})

// create

router.post('/',async (req,res)=>{
    const {name,email,age} = req.body;
    try{  
    const userData = await User.create({
        name:name,
        email:email,
        age:age
    })
    res.status(201).json(userData)
    } catch(error){
        console.log(error)
       res.status(400).json({error:error.message})
    }
})

// single User

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    try{
    const singleUser = await User.findById({_id : id});
    res.status(200).json(singleUser);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message});
    }
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    try{
    const user = await User.findById(id); // basically findById() returns a promise 
    if(!user) {
        return res.status(404).json({error: "User not found"});
    }
    const singleUser = await User.findByIdAndDelete({_id : id});
    res.status(200).json(singleUser);
    console.log("Deleted: ",user.name);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message});
    }
})
router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    try{
    const user = await User.findById(id); // basically findById() returns a promise 
    if(!user) {
        return res.status(404).json({error: "User not found"});
    }
    const UpdateUser = await User.findByIdAndUpdate(id,req.body,{
        new:true,
    });
    res.status(200).json(UpdateUser);
    console.log("Updated: ",user.name);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message});
    }
})
module.exports = router