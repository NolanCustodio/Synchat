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

//Testing Rabbitmq
const amqp = require('amqplib');

async function connect() {
    try{
        const connection = await amqp.connect('amqp://rabbitmq:5672')
        const channel = await connection.createChannel();
        return channel
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

connect().catch(console.warn);


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

// app.use(session({
//     key: "userID",
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60 * 60 * 24 * 7
//     }
// }))

var server = require('http').Server(app);


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

//testing rabbit

app.post('/messages', async (req, res) => {
    try{
        const msg = await channgel.consume('my_queue', (msg) => {
            channel.ack(msg);
            console.log(msg);
            res.send(msg.content.toString());
        }, {noAck: false});
    } catch (err) {
        console.log(err);
        res.status(500).send(err.messge);
    }
})

app.listen(3001, () => {
    console.log("running in container");
})