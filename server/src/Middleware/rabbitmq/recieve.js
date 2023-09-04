const amqp = require('amqplib/callback_api');

const queue = 'hello';

function rabbitRecieve() {
  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function(errro1, channel){
      if (error1) {
        throw error1;
      }

      let queue = 'hello';

      channel.assertQueue(queue, {
        durable:false
      });
    });
  });
}

// (async () => {

//   console.log('in recieve');

//   try {
//     const connection = await amqp.connect('amqp://localhost');
//     const channel = await connection.createChannel();

//     process.once('SIGINT', async () => { 
//       await channel.close();
//       await connection.close();
//     });

//     await channel.assertQueue(queue, { durable: false });
//     await channel.consume(queue, (message) => {
//       console.log(" [x] Received '%s'", message.content.toString());
//     }, { noAck: true });

//     console.log(' [*] Waiting for messages. To exit press CTRL+C');
//   } catch (err) {
//     console.warn(err);
//   }
// })();