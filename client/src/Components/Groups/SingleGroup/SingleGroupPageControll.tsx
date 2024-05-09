import { For, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
// import { groups } from "../../stores/groupStore";

import { getGroupWithPartialUUID, getGroupWithFullUUID } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup } from "../Groups";


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();

    const urlGroupInfo = location.pathname.substring(8);
    // console.log(groupName);

    onMount(async() => {
        if (currentGroup().index !== -1){
            // console.log(currentGroup().id);
            const allGroupInfo = await getGroupWithFullUUID(currentGroup().id);

        
            // if(findGroups.length !== 1){
            //     setUrlError(true);
            //     setGroupSearchInput(groupName);
            //     navigate('/Groups');
            // };
        }else{
            const allGroupInfo = await getGroupWithPartialUUID(urlGroupInfo);
        }
    })

    console.log(currentGroup())

    return(
        <div>
            {/* create components for each page aspect */}
            Group Name - {`<${currentGroup().groupName}>`}
            <br/> --- <br/>
            Group Id - {currentGroup().id}
            <br/> --- <br/>
            Group Events - {(currentGroup().events)}
            <br/>---
            <p>Group Chat Id - {currentGroup().groupChatId}</p>
        </div>
    )
}


