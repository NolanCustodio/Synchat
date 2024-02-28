import express from 'express';

const router = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt';
import comparePasswords from '../../Services/Encrypt/Users/comparePassword';
// import { sessionCheck } from '../../Middleware/Users/sessionAuth';

router.post('/signUp', async (req, res) => {
    try{
        const hashedPassword = await hashPassword(req.body.password);

        req.body.password = '';

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            action: req.body.action,
        }

        let rtn = await DatabaseRequest(newUser);

        if (rtn.action){
            res.cookie('sessionId', rtn.session, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
                httpOnly: true, 
                secure: true,
                sameSite: 'strict',
            });
        }

        res.send(rtn);

    }catch (error){
        console.log(error);
    }
});

router.post("/login", async (req, res) =>{
    let isPasswordMatch = false;
    let isSessionValid = false;
    let rtnSession;

    try{
        const userInput = {
            username: req.body.username,
            action: req.body.action
        }

        const rtnUserInfo = await DatabaseRequest(userInput);

        isPasswordMatch = await comparePasswords(req.body.password, rtnUserInfo.password);

        if (isPasswordMatch){
            const currentSession = {
                sessionId: rtnUserInfo.sessionId,
                action: 'checkSession'
            }

            rtnSession = await DatabaseRequest(currentSession);
            isSessionValid = rtnSession.isSessionUsed;
        }

        if (isSessionValid){
            res.cookie('sessionId', rtnSession.sessionId, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7days
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            })
        }

        res.send({flag: isPasswordMatch});

    }catch(error){
        console.log(error);
    }
})

router.get("/checkSession", async (req, res) => {
    let rtn = {
        isCookieUsed: false
    }

    try{
        if (req.cookies.sessionId){
            console.log(req.cookies.sessionId);

            const cookieData ={
                sessionId: req.cookies.sessionId,
                action: 'checkSession',
            }
            rtn = await DatabaseRequest(cookieData);

            // res.cookie('sessionId', rtn.session, {
            //     maxAge: 1000 * 60 * 60 * 24 * 7, //7days
            //     httpOnly: true,
            //     secure: true,
            //     sameSite: 'strict'
            // })
        }

    }catch(error){
        console.log(error);
    }
    res.send(rtn);
})

export default router;