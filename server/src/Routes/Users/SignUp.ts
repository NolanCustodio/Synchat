import express from 'express';

const router = express.Router();

import signUp from '../../Services/RabbitMQ/Users/SignUp';

router.post('/signUp', async (req, res) => {

    try{
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            eventUUID: ''
        }

        let rtn = await signUp(newUser);

        res.send(rtn);

    }catch (error){
        console.log(error);
    }
});

export default router;
