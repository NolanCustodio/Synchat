import express from 'express';

const router = express.Router();

import signUp from '../../Services/RabbitMQ/Users/SignUp';

router.post('/signUp', async (req, res) => {

    try{
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
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

export default router;
