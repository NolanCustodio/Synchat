import { For, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
// import { groups } from "../../stores/groupStore";

import { getGroupWithPartialUUID, getGroupWithFullUUID } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup } from "../Groups";


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();

    const groupName = location.pathname.substring(8);
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
        }    
    })

    return(
        <div>
            {/* create components for each page aspect */}
            Group Name - {`<${currentGroup().groupName}>`}
            <br/> --- <br/>
            {currentGroup().id}
            <br/> --- <br/>
            <For each={currentGroup().events}>
                {(event:any) =>(
                    <div>
                        {event.startDate}
                        <br/>---<br/>    
                        {event.eventName}    
                    </div>
                )}
            </For>
            ---
            <p>chat</p>
        </div>
    )
}


