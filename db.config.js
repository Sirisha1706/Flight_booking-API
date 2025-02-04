import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const url = 'mongodb://127.0.0.1:27017/flights';

export const connectDb = async()=>{
    try{
        await mongoose.connect(url);
        console.log('mongodb is up running');
    }
    catch(err){
        console.log(err);
    }
    
}

