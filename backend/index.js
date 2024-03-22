import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';

dotenv.config();// Loading environment variables from .env file
const app =express();
const port = process.env.PORT || 8000; // Default port is 8000 if PORT is not defined in .env

// CORS options for allowing all origins and credentials
const corsOptions = {
    origin:true,
    credentials:true
}

mongoose.set("strictQuery",false);

// Function to connect to MongoDB database
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

// Root route to check if the API is working
app.get("/",(req,res)=>{
    res.send("api is working")
})

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v2/auth', authRoute)

// Start the server
app.listen(port,()=>{
    connect();// Connect to MongoDB database
    console.log('server listening on port',port);
});
