import { For, createSignal, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { unwrap } from "solid-js/store";

// import { groups } from "../../stores/groupStore";

import { getGroup } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup, setCurrentGroup } from "../../../stores/groupStore";


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();
    let groupInfo: any;
    // console.log(groupName);

    onMount(async() => {

        // console.log(currentGroup.groupId);
        let groupId

        if (currentGroup.groupId){
            groupId = currentGroup.groupId
        }else{
            groupId = location.pathname.substring(8);
        }

        groupInfo = await getGroup(groupId);

        if(groupInfo === null){
            //set value in store for error of page not found

            navigate("/Home");
            return;
        }

        setCurrentGroup({
            groupId: groupInfo.groupId,
            groupName: groupInfo.groupName,
            events: groupInfo.events,
            currentEvent: groupInfo.currentEvent,
            groupChatId: groupInfo.groupChat.groupChatId,
            users: groupInfo.users
        })
        console.log(unwrap(currentGroup));
    })

    

    return(
        <div>
            {/* create components for each page aspect */}
            Group Name - {currentGroup.groupName}
            <br/> --- <br/>
            Group Id - {currentGroup.groupId}
            <br/> --- <br/>
            Group Events - {currentGroup.events}
            <br/> --- <br/>
            Group Chat Id - {currentGroup.groupChatId}
        </div>
    )
}


