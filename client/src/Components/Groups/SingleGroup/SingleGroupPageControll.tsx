import { For } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
// import { groups } from "../../stores/groupStore";

import { navFromURL } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
import { currentGroup } from "../Groups";


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();

    if (currentGroup().index === -1){
        const groupName = location.pathname.substring(8);
        const findGroups = navFromURL(groupName);
    
        if(findGroups.length !== 1){
            setUrlError(true);
            setGroupSearchInput(groupName);
            navigate('/Groups');
        };
    }
    
    return(
        <div>
            {currentGroup().groupName}
            <br/> --- <br/>
            {currentGroup().id}
            <br/> --- <br/>
            <For each={currentGroup().events}>
                {(event:any) =>(
                    <div>
                        {event.startDate}    
                    </div>
                )}
            </For>
        </div>
    )
}


