import express from 'express';
const groupRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

groupRouter.post('/createGroup', async (req, res) => {
    try{

        console.log(req.cookies);

        const userAndGroupInfo = { ...req.body, userSessionId: req.cookies.sessionId }

        // console.log(userAndGroupInfo);
        // const rtn = await DatabaseRequest(userAndGroupInfo);

        // console.log(rtn);

    }catch (error){

    }

    res.send({});
})

export default groupRouter;