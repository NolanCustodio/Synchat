import express from 'express';
const eventRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

eventRouter.post('/addEvent', async (req, res) => {
    try{

        // console.log('aetawet',req.body);

        const queryInfo = {
            ...req.body,
            userSession: req.cookies.sessionId
        }

        const rtn = await DatabaseRequest(queryInfo);

    }catch(error){
        console.log(error);
    }

    res.send({});
})

export default eventRouter;

