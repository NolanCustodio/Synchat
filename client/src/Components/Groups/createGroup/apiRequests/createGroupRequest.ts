

export async function createGroupRequest(newGroupData: any): Promise<any>{
    let rtnObj = {
        flag: false
    };

    try{
        console.log(newGroupData);
    }catch (error){
        console.log(error);
    }

    return rtnObj;
}