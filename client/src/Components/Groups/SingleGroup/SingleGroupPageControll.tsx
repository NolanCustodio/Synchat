
import { useLocation, useNavigate } from "@solidjs/router";
// import { groups } from "../../stores/groupStore";

import { navFromURL } from "./navToSingleGroup";
import { setGroupSearchInput, setUrlError } from "../helperComponents/SearchGroup";
// export const [ currnetGroup, setCurrnetGroup ] = createSignal({})


export default function SingleGroupPageControll(){
    const location = useLocation();
    const navigate = useNavigate();

    const groupName = location.pathname.substring(8)
    const findGroups = navFromURL(groupName);

    console.log(findGroups.length);

    if(findGroups.length === 0){
        window.location.href="/Groups";
    };

    if(findGroups.length > 1){
        setUrlError(true);
        setGroupSearchInput(groupName);
        navigate('/Groups');
    };
    
    return(
        <div>
            
        </div>
    )
}


