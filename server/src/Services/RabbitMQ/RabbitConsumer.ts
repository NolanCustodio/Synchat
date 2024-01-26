import { Channel, ConsumeMessage } from "amqplib";
import { EventEmitter } from "events";

export default class RabbitConsumer{


    constructor(
        private channel: Channel, 
        private replyQueueName: string,
        private eventEmitter: EventEmitter
    ){}

    async consumeMessages(){
        console.log("Express: Waiting for messages");

        this.channel.consume(this.replyQueueName, (message: ConsumeMessage | null) => {
            if (message){
                const uuid = message.properties.correlationId;
                this.eventEmitter.emit(uuid, JSON.parse(message.content.toString()));
            }else{
                //message does not exist
                //terminate gracefully
            }
        },{
            noAck: true
        });
    }
}