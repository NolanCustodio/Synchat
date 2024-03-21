import express from 'express';
const userInteractionRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

userInteractionRouter.post('/usernameSearch', async (req, res) => {
    try{
        req.body.userSessionId = req.cookies.sessionId
        // const x  = req.body;
        // console.log('in express',req.body);

        const rtn = await DatabaseRequest(req.body);

        // console.log('in express after db',rtn);
        res.send(rtn);

    }catch (error){
        console.log(error);
    }

});

export default userInteractionRouter;



