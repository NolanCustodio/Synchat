import express from 'express';

const router = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt';
import comparePasswords from '../../Services/Encrypt/Users/comparePassword';
import { sessionCheck } from '../../Middleware/Users/sessionAuth';

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

        console.log(rtn.session);
        res.send(rtn);

    }catch (error){
        console.log(error);
    }
});

router.post("/login", async (req, res) =>{
    try{
        console.log(req.cookies);

        const verifyUser = {
            username: req.body.username,
            action: req.body.action,
        }

        //send username and action to database
        let rtn = await DatabaseRequest(verifyUser);

        const bool = await comparePasswords(req.body.password, rtn.userInfo.password);
        console.log('trying user id', req.session);
        //return hashed password

        // console.log(bool);

        // if (bool){
        //     req.session.userId = await sessionCheck(req.session.userId);
        // }
        
        // req.session.userId = await sessionCheck(req.session.userId);

        // console.log(req.session.userId);

        res.cookie('sessionKey', 'test');
        res.send(req.session);

    }catch(error){

    }
})

export default router;
// module.exports = router
