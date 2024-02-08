import express from 'express';

const router = express.Router();

import signUp from '../../Services/RabbitMQ/Users/SignUp';
import hashPassword from '../../Services/Encrypt/Users/passwordEncrypt';

router.post('/signUp', async (req, res) => {
    try{
        const hashedPassword = hashPassword(req.body.password);

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            action: req.body.action,
            eventUUID: ''
        }

        let rtn = await signUp(newUser);
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

    }catch(error){

    }
})

export default router;
