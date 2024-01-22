import * as amqp from 'amqplib';

async function recieveSignUp(): Promise<void>{

    const connection = await amqp.connect('amqp://rabbitmq:5672')
    const channel = await connection.createChannel();

    const queue = 'inward'
    await channel.assertQueue(queue);

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, (message) => {
        if (message !== null){
            let response = message.content.toString();
            console.log('in recieve', response);
            // console.log('in recieve', message);

            channel.sendToQueue(message?.properties.replyTo, 
                Buffer.from(response), {
                    correlationId: message?.properties.correlationId
            });
            channel.ack(message);
        };

       return 
    });
}

export default recieveSignUp;