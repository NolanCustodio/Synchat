import express from 'express';
const userInteractionRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

userInteractionRouter.post('/search', async (req, res) => {
    try{
        const x  = req.body;
        console.log('in express',x);

        // const rtn = await DatabaseRequest();

    }catch (error){
        console.log(error);
    }

    res.send({});
});

export default userInteractionRouter;



