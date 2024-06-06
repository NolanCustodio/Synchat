import { API_Route, buildOptions } from "../constants";
const route = `${API_Route}/event`;

export async function addEvent(eventInfo: any){
    const options = buildOptions('POST', eventInfo);

    try{
        const response = await fetch(`${route}/addEvent`, options);
    }catch(error){
        console.log(error);
    }
}

