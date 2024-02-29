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
            isSessionValid = rtnSession.isSessionValid;
        }

        if (isSessionValid){
            res.cookie('sessionId', rtnSession.sessionId, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7days
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            })
        }else{
            res.clearCookie('sessionId', {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            });
        }
        res.send({flag: isSessionValid});

    }catch(error){
        console.log(error);
    }
})

router.get("/logOut", async (req, res) => {
    
    try {
        if (req.cookies.sessionId){
            res.clearCookie('sessionId',{
                httpOnly: true,
                secure: true,
                sameSite: true
            });
        };
    }catch(error){

    }

    res.send();
});

router.get("/checkSession", async (req, res) => {
    let isSessionValid;

    try{
        if (req.cookies.sessionId){

            const cookieData ={
                sessionId: req.cookies.sessionId,
                action: 'checkSession',
            }
            const response = await DatabaseRequest(cookieData);
            isSessionValid = response.isSessionValid;
        }

        if (isSessionValid === false){
            res.clearCookie('sessionId',{
                httpOnly: true,
                secure: true,
                sameSite: true
            })
        }

    }catch(error){
        console.log(error);
    }
    res.send({isSessionValid: isSessionValid});
})

export default router;