import express from 'express';
const groupRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

groupRouter.post('/createGroup', async (req, res) => {
    try{

        console.log(req.cookies);

        const userAndGroupInfo = { ...req.body, userSessionId: req.cookies.sessionId }

        // console.log(userAndGroupInfo);
        const rtn = await DatabaseRequest(userAndGroupInfo);

        console.log(rtn);

    }catch (error){
        console.log(error);
    }

    res.send({});
})

groupRouter.post('/getGroups', async (req, res) => {
    let rtn;
    try{
        req.body.userSessionId = req.cookies.sessionId;
        // console.log(req.body);

        rtn = await DatabaseRequest(req.body);
        // console.log(rtn);

    }catch(error){
        rtn = {}
        console.log(error);
    }

    res.send(rtn)
})

groupRouter.post('/getGroup', async (req, res) => {
    let rtn = {};
    try{
        req.body.userSessionId = req.cookies.sessionId;

        rtn = await DatabaseRequest(req.body);
        console.log(rtn);
        
    }catch(error){
        console.log(error);
    }
    res.send(rtn);
})

export default groupRouter;