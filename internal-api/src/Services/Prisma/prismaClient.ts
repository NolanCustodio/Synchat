import { PrismaClient } from "@prisma/client/extension";



class myPrismaClient{
    private constructor(){};
    private static instance: myPrismaClient;

    private isInitialIzed = false;

    public static getInstance(){
        if(!this.instance){
            this.instance = new myPrismaClient();
        }
        return this.instance;
    }

    async initialized(){
        if (this.isInitialIzed){
            return;
        }

        try{
            this.isInitialIzed = true;
        }catch(error){
            console.log("My Prisma Client Error", error);
        }
    }

    async query(queryName: string){

    }
}

export default myPrismaClient.getInstance();