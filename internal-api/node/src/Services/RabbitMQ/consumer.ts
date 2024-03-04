import { Channel, ConsumeMessage } from "amqplib";
import RabbitmqClient from "./RabbitmqClient";
import handleMessage from "../../Routes/index";

export default class Consumer{


    constructor(private channel: Channel, private rpcQueue: string){

    }

    async consumeMessages(){
        console.log("DB: Waiting for messages");

        this.channel.consume(
            this.rpcQueue, 
            async (message: ConsumeMessage | null) => {
                if (message === null){
                    //learn how to end gracefully
                    console.log("Error: message does not exist");
                    return;
                }
                
                // console.log('Database incoming message: ', message.content.toString());
                const {correlationId, replyTo} = message.properties
                // console.log(correlationId, replyTo);

                if (!correlationId || !replyTo){
                    console.log("Missing correlationId or replyTo");
                    return
                }

                //call helper function/handler to execute operation
                const rtnData = await handleMessage(message.properties.headers.action, JSON.parse(message.content.toString()));

                //sendToQueue
                await RabbitmqClient.produce(rtnData, correlationId, replyTo);

                
            },{
            noAck: true
            }
        );
    }
}