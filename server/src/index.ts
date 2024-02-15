//Node + Packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

import session from 'express-session';

import RabbitmqClient from './Services/RabbitMQ/RabbitClient'

//Route Paths
import auth from './Routes/Users/userAuth';
// const auth = require("./Routes/Users/userAuth");

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

app.use(session({
    name: "qid",
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 //7 days
    }
}))

//Routes
app.use('/users', auth);

//Rabbit Testing
RabbitmqClient.initialize();

app.listen(listeningPort, () => {
    console.log(`running in container on port ${listeningPort}`);
});


