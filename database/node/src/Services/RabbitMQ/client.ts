import { Channel, Connection, connect } from 'amqplib';
import Consumer from './consumer';
import Producer from './producer';


class RabbitmqClient{
    private constructor(){};
    private static instance: RabbitmqClient;

    private isInialized = false;
    
    private producer: Producer;
    private consumer: Consumer;
    private connection: Connection;
    private producerChannel: Channel;
    private consumerChannel: Channel;



    public static getInstance(){
        if(!this.instance){
            this.instance = new RabbitmqClient();
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

            const {queue: rpc_queue} = await this.consumerChannel.assertQueue(
                'rpc_queue', 
                {exclusive: true});

            this.producer = new Producer(this.producerChannel);
            this.consumer = new Consumer(this.consumerChannel, rpc_queue);

            this.consumer.consumeMessages();

            this.isInialized = true;

            }catch(error){
            console.log("rabbit error", error);
        }
    }

    async produce(data: any, correlationId: string, replyToQueue: string){
        if (!this.isInialized){
            await this.initialize();
        }

        return await this.producer.produceMessages(data, correlationId, replyToQueue);
    }
}

export default RabbitmqClient.getInstance();