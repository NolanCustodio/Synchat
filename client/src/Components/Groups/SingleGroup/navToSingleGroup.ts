import { unwrap } from "solid-js/store";

import { userGroups } from "../../../stores/groupStore";

import { getGroupRequest } from "../apiRequests/groupRequest";

export async function getGroup(groupUUID: string){
    const response = await getGroupRequest(groupUUID);
    // console.log(response);

    return response.completeGroup;
}