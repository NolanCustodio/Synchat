import { API_Route, buildOptions, httpOptions } from "../constants";
const route = `${API_Route}/group`;

export async function createGroup(data: any): Promise<any>{
    const options: any = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try{
        const response = await fetch(`${route}/createGroup`, options);
        return response.json();
    }catch (error){
        console.log(error);
        return {error: error};
    }
}

export async function getGroups(data: any): Promise<any>{
    const options: any = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try{
        const response = await fetch(`${route}/getGroups`, options)
        return response.json();
    }catch(error){
        console.log(error)
    }
}

