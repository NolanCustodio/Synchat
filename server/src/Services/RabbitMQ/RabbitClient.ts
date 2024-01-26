import { Channel, Connection, connect } from 'amqplib';
import dotenv from 'dotenv';
import Consumer from './RabbitConsumer';
import Producer from './RabbitProducer';
import EventEmitter from 'events';

dotenv.config();

class RabbitClient{
    private constructor(){};
    private static instance: RabbitClient;

    private isInialized = false;
    
    private producer: Producer;
    private consumer: Consumer;
    private connection: Connection;
    private producerChannel: Channel;
    private consumerChannel: Channel;

    private eventEmitter: EventEmitter;

    // private rabbitUser = process.env.TEST_RABBIT_USER;
    // private rabbitmqPassword = process.env.TEST_RABBIT_PASSWORD;


    public static getInstance(){
        if(!this.instance){
            this.instance = new RabbitClient();
        }
        return this.instance;
    }

    async initialize(){
        if (this.isInialized){
            return;
        }
        try{
            this.connection = await connect(
                `amqp://@rabbitmq:5672`
            )
            
            this.producerChannel = await this.connection.createChannel();
            this.consumerChannel = await this.connection.createChannel();

            const {queue: replyQueueName} = await this.consumerChannel.assertQueue('', {exclusive: true});

            this.eventEmitter = new EventEmitter();

            this.producer = new Producer(
                this.producerChannel, 
                replyQueueName,
                this.eventEmitter
            );
            this.consumer = new Consumer(
                this.consumerChannel, 
                replyQueueName,
                this.eventEmitter
            );

            this.consumer.consumeMessages();

            this.isInialized = true;

            }catch(error){
            console.log("rabbit error", error);
        }
    }

    async produce(data: any): Promise<string>{
        if (!this.isInialized){
            await this.initialize();
        }

        return await this.producer.produceMessages(data);
    }
}

export default RabbitClient.getInstance();