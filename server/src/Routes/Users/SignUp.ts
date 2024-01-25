import express from 'express';
import EventEmitter from 'events';

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
        await signUp(newUser);

    }catch (error){
        console.log(error);
    }

    // try{
    //     const uuid = randomUUID();
    //     const passwordUUID = randomUUID();
    //     let newUser= {
    //         username: '',
    //         email: '',
    //         password: '',
    //         eventUUID: ''
    //     }

    //     const eventEmitter = new EventEmitter();

    //     //setup/use interface/object hash password
    //     hashPassword(req.body.password, passwordUUID, eventEmitter);
        
    //     //make sure to use a uuid for event
    //     eventEmitter.on(passwordUUID, (password) => {
    //         newUser = {
    //             username: req.body.username,
    //             email: req.body.email,
    //             password: password,
    //             eventUUID: uuid
    //         }

    //         console.log("new user info ",newUser);

    //         if (newUser.password === ''){
    //             //create proper redirection
    //             res.redirect('/404');
    //         }

    //         //valid user info, but still not verified for unique values
    //         rabbitmqClient.produce(newUser)
    //     });

    //     const eventEmitter2 = new EventEmitter();
    //     console.log("event emitter uuid in signUp is:", uuid, typeof(uuid));
    //     eventEmitter2.on(newUser.eventUUID, (data) => {
    //         console.log("End of data flow",  data);
    //     });

    // } catch (error) {
    //     console.log(error);
    // }
});

export default router;
