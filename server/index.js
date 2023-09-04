//
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

var router = express.Router();

//Routes
const users = require('./src/Routes/users');

//rabbitmq from danielpdev.io
// const rabbit = require("./src/Middleware/rabbitmq/recieve")
// var rabbitMQHandler = require('./connection');

//rabbitmq from rabbit getting started
// const rabbit = require("./src/Middleware/rabbitmq/recieve")


//Instances
const app = express();
const db = mysql.createPool({
    host:       'database',
    user:       'user',
    password:   'root-pass',
    database:   'testdb',
});

//Middleware
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
    key: "userID",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 7
    }
}))

var server = require('http').Server(app);
var socketIO = require('socket.io')(server);
var calcSocket = socketIO.of('./calc');

app.post("/", (req, res) => {
    console.log("connected");
});

//Routes

//Users
app.use("/db/user", users);


app.post("/db/event/insert", (require, response) => {
    // console.log(require.body);
    const incomingData = require.body;

    // get following data from front-end
    const eventName = incomingData.eventName;
    const eventTopic = incomingData.eventTopic

    const sqlInsert = `INSERT INTO events (eventName, eventTopic) VALUES ('${eventName}', '${eventTopic}')`;

    db.query(sqlInsert, (error, result) =>{
        if (error) {
            console.log(error);
            response.send(error);
        }else{
            console.log("success");
            // console.log(response);
            // return result;
            response.send("success")
        }
    });
});

app.get("/db/event/get", (require, response) => {

    const sqlSelect = `SELECT * FROM events`;

    db.query(sqlSelect, (error, result) => {
        if (error) {
            console.log(error);
        }else{
            console.log(result);
            response.send(result);
        }
    });

});

// app.get("/", (require, response) => {
//     //try revieve JSON from client/frontend inside of require for db query

//     //create string for query possibly use ``
//     const sqlQuery = `INSERT INTO ${some_db} VALUES ${some_name}, ${some_password}`;

//     db.query(sqlQuery, (error, result) => {
//         //send information back
//         result.send("hello");

//         //try to send back JSON to client/frontend for dynamic webpages
//     });

//     response.send("Hello world");
// });

app.listen(3001, () => {
    console.log("running in container");
})