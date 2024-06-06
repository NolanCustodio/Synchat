import express from 'express';
const eventRouter = express.Router();

import DatabaseRequest from '../../Services/RabbitMQ/Users/DatabaseRequest';

eventRouter.post('/addEvent', async (req, res) => {
    try{

        console.log('aetawet',req.body);

    }catch(error){
        console.log(error);
    }

    res.send({});
})

export default eventRouter;

