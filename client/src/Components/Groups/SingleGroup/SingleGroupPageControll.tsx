import { For, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
// import { groups } from "../../stores/groupStore";

import { getGroupWithPartialUUID, getGroupWithFullUUID } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup, setCurrentGroup } from "../Groups";


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();
    let groupInfo: any;

    const urlGroupInfo = location.pathname.substring(8);
    // console.log(groupName);

    onMount(async() => {
        if (currentGroup().isIdSet){
            // console.log(currentGroup().id);
            groupInfo = await getGroupWithFullUUID(currentGroup().id);

        
            // if(findGroups.length !== 1){
            //     setUrlError(true);
            //     setGroupSearchInput(groupName);
            //     navigate('/Groups');
            // };
        }else{
            groupInfo = await getGroupWithPartialUUID(urlGroupInfo);
        }
        setCurrentGroup(groupInfo.completeGroup)

        console.log(currentGroup().groupChat.groupChatId);
    })

    

    return(
        <div>
            {/* create components for each page aspect */}
            Group Name - {`<${currentGroup().groupName}>`}
            <br/> --- <br/>
            Group Id - {currentGroup().groupId}
            <br/> --- <br/>
            Group Events - {currentGroup().events}
            <br/> --- <br/>
            Group Chat Id - {currentGroup().groupChat}
        </div>
    )
}


