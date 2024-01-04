import client, { Connection, Channel, ConsumeMessage } from 'amqplib';
import dotenv from 'dotenv'; dotenv.config();

const rabbitUser = process.env.TEST_RABBIT_USER;
const rabbitmqPassword = process.env.TEST_RABBIT_PASSWORD;
console.log(rabbitUser , rabbitmqPassword);

const rabbitmq = async () => {
    const connection: Connection = await client.connect(
        `amqp://${rabbitUser}:${rabbitmqPassword}@rabbitmq:5672`
    );

    const channel: Channel = await connection.createChannel();

    await channel.assertQueue('myQueue');

    channel.sendToQueue('myQueue', Buffer.from('message'));

    const consumer = (msg: ConsumeMessage | null): void => {
        if (msg){
            console.log(`Recived: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    };

    await channel.consume('myQueue', consumer);
}

export default rabbitmq;