import * as amqp from 'amqplib';

async function recieveSignUp(): Promise<void>{

    const connection = await amqp.connect('amqp://rabbitmq:5672')
    const channel = await connection.createChannel();

    const queue = 'q'
    await channel.assertQueue(queue);

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, (message) => {
        if (message !== null){
            let response = 'valid response';
            console.log('in recieve', message?.content.toString());

            channel.sendToQueue(message?.properties.replyTo, 
                Buffer.from(response.toString()), {
                    correlationId: message?.properties.correlationId
            });
            channel.ack(message);
        }else{
            return
        };
    });
}

export default recieveSignUp;