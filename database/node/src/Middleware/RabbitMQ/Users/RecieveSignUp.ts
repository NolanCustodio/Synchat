import * as amqp from 'amqplib';

async function recieveSignUp(): Promise<string | void>{

    const connection = await amqp.connect('amqp://rabbitmq:5672')
    const channel = await connection.createChannel();

    const queue = 'myQueue'
    await channel.assertQueue(queue, {durable: true});

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, (message) => {
        if (message !== null) {
            let content = message.content.toString();
            console.log(`Recived: ${message.content.toString()}`);
            channel.ack(message);
        }
    })
}

export default recieveSignUp;