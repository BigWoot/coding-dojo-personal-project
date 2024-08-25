//Import libraries
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Import middleware and dbConnect functions
import dbConnect from './config/mongoose.config.js';
import locationRouter from './routes/location.routes.js';

//Pull environment variables
dotenv.config();

//Make an instance of our express service
const app = express();
const PORT = process.env.PORT;

//Attach middleware to our express instance 
app.use(express.json(), cors());
app.use("/api", locationRouter);
app.use(cors());

//Establish connection to MongoDB
dbConnect();

//Turn on and listen for requests
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);