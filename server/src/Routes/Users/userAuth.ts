import express from 'express';

const router = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt';
import comparePasswords from '../../Services/Encrypt/Users/comparePassword';
// import { sessionCheck } from '../../Middleware/Users/sessionAuth';

router.post('/signUp', async (req, res) => {
    try{
        const hashedPassword = await hashPassword(req.body.password);

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
    try{
        let rtn = await DatabaseRequest(req.body);
        console.log('requst done', rtn);

        const isPasswordMatch = await comparePasswords(req.body.password, rtn.password);

        if (isPasswordMatch){
            res.cookie('sessionId', rtn.session, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7days
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            })
        }
        res.send({action: isPasswordMatch});

    }catch(error){
        console.log(error);
    }
})

router.get("/cookieCheck", async (req, res) => {
    let rtn = {
        isCookieUsed: false
    }

    try{
        if (req.cookies.sessionId){
            const cookieData ={
                sessionId: req.cookies.sessionId,
                action: 'cookieCheck',
            }
            rtn = await DatabaseRequest(cookieData);
        }

    }catch(error){
        console.log(error);
    }
    res.send(rtn);
})

export default router;