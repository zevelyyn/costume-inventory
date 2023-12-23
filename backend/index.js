import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import costumesRoute from './routes/costumeRoute.js';
import cors from 'cors';

const app = express();

// Middleware for pasing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());
// app.use(
//     cors({
//         origin: 'https://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('My App')
});

app.use('/costumes', costumesRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App conected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
