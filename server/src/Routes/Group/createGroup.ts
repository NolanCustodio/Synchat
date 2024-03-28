import express from 'express';
const groupRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

groupRouter.post('/createGroup', async (req, res) => {
    try{

        console.log(req.cookies);

        const userAndGroupInfo = { ...req.body, userSessionId: req.cookies.sessionId }

        // console.log(userAndGroupInfo);
        const rtn = await DatabaseRequest(userAndGroupInfo);

        // console.log(rtn);

    }catch (error){
        console.log(error);
    }

    res.send({});
})

export default groupRouter;

groupRouter.post('/getGroups', async (req, res) => {
    try{
        req.body.userSessionId = req.cookies.sessionId;
        console.log(req.body);

        const rtn = await DatabaseRequest(req.body);
        

    }catch(error){
        console.log(error);
    }

    res.send({})
})