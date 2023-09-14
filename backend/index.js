const express= require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors')
const authRoute = require('./routes/auth');
const userRoute=require('./routes/users')
const cookieParser=require('cookie-parser')
const postRoute=require('./routes/post')
const commentRoute=require('./routes/comment')



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

//middlewares

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/comments",commentRoute);





app.listen(process.env.PORT,()=>{
    connectDB();
    console.log('server is running on port 5000');
})