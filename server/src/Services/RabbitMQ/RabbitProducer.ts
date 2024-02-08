import { Channel } from "amqplib";
import { randomUUID } from "crypto";
import EventEmitter from "events";
import dotenv from 'dotenv';
dotenv.config;

export default class Producer{
    
    constructor(
        private channel: Channel, 
        private replyQueueName: string,
        private eventEmitter: EventEmitter
    ) {}

    async produceMessages(data:any): Promise<string>{
        if (!data.eventUUID){
            console.log('creating new uuid');
            // const uuid = randomUUID();
            data.eventUUID = randomUUID();
        }
        
        //probably needs to be more robust when handling non user auth requests
        const uuid = data.eventUUID;

        this.channel.sendToQueue(
            process.env.RPC_QUEUE!, 
            Buffer.from(JSON.stringify(data)),
            {
                replyTo: this.replyQueueName,
                correlationId: uuid,
                headers:{
                    action: data.action
                }
            }
        );

        return new Promise((resolve, reject) => {
            this.eventEmitter.once(uuid, async (data) => {
                delete data.eventUUID;
                resolve(data);
            })
        })
    }
}