import express from 'express';

const router = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt';
import comparePasswords from '../../Services/Encrypt/Users/comparePassword';

router.post('/signUp', async (req, res) => {
    try{
        const hashedPassword = await hashPassword(req.body.password);

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            action: req.body.action,
            eventUUID: ''
        }

        let rtn = await DatabaseRequest(newUser);
        const isSuccess = rtn.isSuccess;
        
        console.log('the return data from post',isSuccess)


        res.send(rtn);

    }catch (error){
        console.log(error);
    }
});

router.post("/login", async (req, res) =>{
    try{
        console.log(req.body);

        const verifyUser = {
            username: req.body.username,
            action: req.body.action,
            eventUUID: ''
        }

        //send username and action to database
        let rtn = await DatabaseRequest(verifyUser);

        const bool = await comparePasswords(req.body.password, rtn.userInfo.password);
        console.log(bool);
        //return hashed password

        res.send({});

    }catch(error){

    }
})

export default router;
