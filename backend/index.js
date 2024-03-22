import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app =express();
const port = process.env.PORT || 8000; // Default port is 8000 if PORT is not defined in .env
const corsOptions = {
    origin:true,
    credentials:true
}

mongoose.set("strictQuery",false);

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB database connected'); 
        
    }catch(err){
        console.log("MongoDB database connection failed");
        
    }
}


app.get("/",(req,res)=>{
    res.send("api is working")
})

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v2/auth', authRoute)
app.use('/api/v2/users', userRoute)


app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);
});
