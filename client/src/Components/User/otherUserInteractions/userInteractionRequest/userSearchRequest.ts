import {usernameSearch} from "../../../../API/User/userInteraction"

export async function userSearchRequest(userSearch: any): Promise<any>{
    let rtnObj={
        flag: false
    };

    // console.log('testing request', userSearch);

    try{
        userSearch.action = 'usernameSearch';
        const response = await usernameSearch(userSearch);
        return response;
    }catch(error){
        console.log(error);
    }
}