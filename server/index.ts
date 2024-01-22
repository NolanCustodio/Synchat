//Node + Packages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import session from 'express-session';

//Route Paths
import SignUp from './src/Routes/Users/SignUp.ts';

//Env
const clientPort = process.env.CLIENT_PORT;
const listeningPort = process.env.LISTENING_PORT;
const secret: string = process.env.SECRET!;

console.log(typeof(secret))

//Instance of Express
const app = express();
app.use(cors({
    origin: [`http://localhost:${clientPort}`],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true
}))


// //Routes
app.use('/users', SignUp);

app.listen(listeningPort, () => {
    console.log("running in container");
});



