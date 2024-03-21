import { API_Route } from "../constants";
const route = `${API_Route}/userInteraction`


export async function usernameSearch(data: any): Promise<any>{
    const options: any = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try{
        const response = await fetch(`${route}/usernameSearch`, options);
        return response.json();
    }catch(error){
        return {error: error};
    }
}