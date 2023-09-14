const express= require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const userRoute=require('./routes/users')
const postRoute=require('./routes/post')
app.use(cors({origin:"http://localhost:5173",credentials:true}))


//database connection
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
           console.log("database connected");
        }
        
    catch(error){
        console.error('MongoDB connection FAILs');
        process.exit(1);
    }
}


app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);




app.listen(process.env.PORT,()=>{
    connectDB();
    console.log('server is running on port 5000');
})