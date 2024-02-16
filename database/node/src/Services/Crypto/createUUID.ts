import { randomUUID } from "crypto";

export function createUUID(): string{
    let rtnString = randomUUID().toString();
    
    rtnString = rtnString.replace(/-/g,'')

    return rtnString;
}


