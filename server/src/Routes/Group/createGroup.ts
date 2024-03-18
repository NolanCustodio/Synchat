import express from 'express';
const groupRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

groupRouter.post('/createGroup', async (req, res) => {
    try{
        const userAndGroupInfo = { ...req.body, userId: req.cookies.sessionId }

        const rtn = await DatabaseRequest(userAndGroupInfo);

        // console.log(rtn);

    }catch (error){

    }

    res.send({});
})

export default groupRouter;