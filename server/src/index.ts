//Node + Packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import session from 'express-session';

import RabbitmqClient from './Services/RabbitMQ/RabbitClient'

//Route Paths
import auth from './Routes/Users/userAuth';
import group from './Routes/Group/createGroup';
import userInteraction from './Routes/Users/userInteraction';

//Env
const clientPort = process.env.CLIENT_PORT;
const listeningPort = process.env.LISTENING_PORT;
const secret = process.env.SECRET!;

//Instance of Express
const app = express();
app.use(cors({
    credentials: true,
    origin: [`http://localhost:${clientPort}`],
    methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/users', auth);
app.use('/group', group);
app.use('/userInteraction', userInteraction)

//Rabbit Testing
RabbitmqClient.initialize();

app.listen(listeningPort, () => {
    console.log(`running in container on port ${listeningPort}`);
});


