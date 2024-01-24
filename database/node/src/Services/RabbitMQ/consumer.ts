import { Channel, ConsumeMessage } from "amqplib";

export default class Consumer{


    constructor(private channel: Channel, private rpcQueue: string){

    }

    async consumeMessages(){
        console.log("Waiting for messages");

        this.channel.consume(
            this.rpcQueue, 
            (message: ConsumeMessage | null) => {
                if (message === null){
                    //learn how to end gracefully
                    console.log("Error: message does not exist");
                    return;
                }
                
                const {correlationId, replyTo} = message.properties

                if (!correlationId || !replyTo){
                    console.log("Missing correlationId or replyTo");
                }else{
                    
                    //parse data
                    //get reply_queue
                    //getcorrelationId

                    //sendToQueue with correct response
                }

                console.log('the reply', JSON.parse(message.content.toString()));
            },{
            noAck: true
            }
        );
    }
}