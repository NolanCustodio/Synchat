import express from 'express';
import EventEmitter from 'events';
import { randomUUID } from 'crypto';
const router = express.Router();

//Services
import rabbitmqSend from '../../Services/RabbitMQ/rabbitmqSend.ts';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt.ts';

import NewUser from '../../Models/NewUser.ts';

router.post('/signUp', (req, res) => {
    let NewUser: NewUser = {
        username: '',
        email: '',
        password: '',
        sessionId: ''
    }

    const eventEmitter = new EventEmitter();

    //setup/use interface/object hash password
    hashPassword(req.body.password, eventEmitter);

    //create a session and sessionId
        // add sessionId to the new user
    
    eventEmitter.on('encryptedPassword', (password) => {
        NewUser = {
            username: req.body.username,
            email: req.body.email,
            password: password,
            sessionId: randomUUID()
        }

        console.log(NewUser);

        if (NewUser.password === ''){
            //create proper redirection
            res.redirect('/404');
        }

        //valid user info, but still not verified for unique values
        rabbitmqSend(NewUser, eventEmitter);
    })

    //user information was already taken
    eventEmitter.on('usernameTaken', (message) => {
        console.log('username taken')
        res.send(message)
    })

    //getting data from rabbitmq rpc chain
    eventEmitter.on('signUp', (message) => {
        console.log('successful emit',message);
        res.send(message);
    })
});

export default router;