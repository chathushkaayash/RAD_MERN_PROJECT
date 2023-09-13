const express= require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');



app.use(cors({origin:"http://localhost:5173",credentials:true}))


//database connection
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
           console.log("database connected");
        }
        
    catch(error){
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}







app.listen(process.env.PORT,()=>{
    connectDB();
    console.log('server is running on port 5000');
})