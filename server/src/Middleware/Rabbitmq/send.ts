import client, { Connection, Channel, ConsumeMessage } from 'amqplib';
import dotenv from 'dotenv'; dotenv.config();

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

    await channel.assertQueue('myQueue');

    channel.sendToQueue('myQueue', Buffer.from(JSON.stringify(NewUser)));

}

export default rabbitmq;