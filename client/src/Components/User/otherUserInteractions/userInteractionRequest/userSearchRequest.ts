import {usernameSearch} from "../../../../API/User/userInteraction"

export async function userSearchRequest(userSearch: any): Promise<any>{
    let rtnObj={
        flag: false
    };

    // console.log('testing request', userSearch);

    try{
        userSearch.action = 'search'

        const response = await usernameSearch(userSearch);

    }catch(error){
        console.log(error);
    }
}