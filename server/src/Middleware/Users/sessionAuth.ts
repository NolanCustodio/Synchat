import { randomUUID } from "crypto";

export async function sessionCheck(userSession: any){
    let rtnString = userSession;
    console.log('in func',userSession);
    if (userSession === undefined){
        rtnString = randomUUID();
    }

    return rtnString;
}



