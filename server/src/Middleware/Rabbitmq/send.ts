import client, { Connection, Channel, ConsumeMessage } from 'amqplib';
import dotenv from 'dotenv'; dotenv.config();
import { randomUUID } from 'crypto';

const rabbitUser = process.env.TEST_RABBIT_USER;
const rabbitmqPassword = process.env.TEST_RABBIT_PASSWORD;
console.log(rabbitUser , rabbitmqPassword);

interface User{
    username: string,
    email: string,
    password: string,
}

const rabbitmq = async (NewUser: User) => {
    const connection: Connection = await client.connect(
        `amqp://${rabbitUser}:${rabbitmqPassword}@rabbitmq:5672`
    );

    const channel: Channel = await connection.createChannel();

    const replyQueue = await channel.assertQueue('', {
        exclusive: true
    });

    const correlationId = randomUUID();

    // const payload = Buffer.from(JSON.stringify(NewUser));
    const payload = Buffer.from('testest');

    channel.sendToQueue('q', 
        payload, 
        {
            correlationId: correlationId,
            replyTo: replyQueue.queue
        }
    );

    channel.consume(replyQueue.queue, (message) => {
        if (message?.properties.correlationId == correlationId) {
            console.log("Recieved |", message.content.toString());
            setTimeout(() => {
                connection.close();
                process.exit(0);
            }, 500);
            channel.ack(message);
        }
    }
    // ,{noAck: true}
    );
}

export default rabbitmq;