import { createSignal } from "solid-js";

import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation } from "../../../stores/groupStore";

export function SearchForUser(props: any){
    const [otherUsers, setOtherUsers] = createSignal([
        {}
    ]);

    const handleUserSearch = (event: any) =>{
        userSearchRequest({username: event.target.value});
    }

    return(
        <div>
            <input 
                type="text"
                id={props.id}
                class="create-group-input" 
                placeholder={props.placeholderText}
                value={newGroupCreation[props.id]}
                onInput={(event:any) => {
                    handleTextInput(props.id, event.target.value);
                    handleUserSearch(event);
                }}
            />
        </div>
    )
}

