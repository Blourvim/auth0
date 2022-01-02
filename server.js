import dotenv from 'dotenv';
dotenv.config()

// ROUTING
import express from 'express';
const app = express()
import feedbackRoute from './routes/feedbackRoute.js';
import achivementsRoute from './routes/achivementsRoute.js'
import axios from 'axios';
import mongoose from 'mongoose';

// MIDDLEWARE
import authenticated from './middleware/security.js';
import bodyParser from 'body-parser';
// CORS
import cors from 'cors';
const origin = process.env.CORS || 'http://localhost:3000';
app.use(cors({ 
  Origin:'http://localhost:3000' }));

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_DB_KEY,error=> console.error(error));

mongoose.connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
    app.listen(PORT, ()=> {
      console.log("Server is running on Port: " + PORT);
    });

    if (process.env.NODE_ENV === 'production')app.use(express.static('./client/build'));
    
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      console.error('Request without valid token');
      res.status(401).send({ msg: 'Invalid token' });
    } else next();
  });



// Routes

app.use('/api/achivements',achivementsRoute)
app.use('/api/feedbacks',feedbackRoute);