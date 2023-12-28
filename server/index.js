// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/testing", (req, res) => {
    console.log(req.body);
    res.send({ body: 'world' });
});

app.listen(3001, () => {
    console.log("running in container");
});



