import { For, createSignal, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { unwrap } from "solid-js/store";

// import { groups } from "../../stores/groupStore";

import { getGroup } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup, setCurrentGroup } from "../../../stores/groupStore";

import { Events } from "./Events/events";


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
            setUrlError(true);
            navigate("/Groups");
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
        // console.log(currentGroup.events);
    })

    

    return(
        <div class="group-foreground">
            {/* create components for each page aspect */}
            <h1>{currentGroup.groupName}</h1>
            <br/> --- <br/>
            <Events/>
            <br/> --- <br/>
            Group Chat Id - {currentGroup.groupChatId}
        </div>
    )
}


