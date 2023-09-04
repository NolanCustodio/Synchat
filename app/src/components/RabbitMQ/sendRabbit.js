const amqp = require ('amqplib/callback_api');

// const sendRabbit = async () => {
//     console.log('in sendRabbit()');

//     amqp.connect('amqp://localhost', function(error0, connection){
//         if(error0) {
//             throw error0;
//         }
//         connection.createChannel(function(error1, channel){
//             if (error1) {
//                 throw error1;
//             }
//             let queue = 'hello';
//             let msg = 'Hello World';

//             channel.assertQueue(queue, {
//                 durable:false
//             });
        
//         channel.sendToQueue(queue, Buffer.from(msg));
//         console.log(" [x] Sent %s", msg);
//         })
//     });
// };

// export default sendRabbit;