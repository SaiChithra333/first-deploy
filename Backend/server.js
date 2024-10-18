const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// Allow requests from your frontend origin
const corsOptions = {
    origin: 'https://dont-knowfront-jvuswsv71-sai-chithras-projects.vercel.app', // Update to your frontend URL
    optionsSuccessStatus: 200,
    credentials: true // If you are using cookies for authentication
};

app.use(cors(corsOptions));


app.use(express.json());
const User = require('./model/Usermodel');
const UserRouter = require('./routes/UserRoute')

mongoose.connect(process.env.URL).then(()=>{
    console.log('database created');
    app.listen(process.env.PORT|| 5001,(err)=>{
        if(err) console.log(err);
        console.log("running successfully at ",process.env.PORT||5001);
    }); 
}).catch((err)=>{
    console.log("error",err);
})
// get
app.get('/',async (req,res)=>{
   
    const showAll = await User.find();
    res.status(200).json(showAll);

})

// create
app.post('/',async (req,res)=>{
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
app.use("/api/user/",UserRouter)