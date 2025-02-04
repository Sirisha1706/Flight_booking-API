import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';

import userRouter from './src/features/users/user.router.js';
import flightRouter from './src/features/flight/flight.routes.js';
import { connectDb } from './db.config.js';


const server = express();
const port = process.env.PORT || 3000;

dotenv.config();
server.use(cookieParser());
server.use(express.json());

//routes
server.use('/api/user', userRouter);
server.use('/api/flights', flightRouter);

server.listen(port, ()=>{
    console.log(`Listening to server ${port}`)
    connectDb();
})
