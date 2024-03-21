import { createSignal, createEffect } from "solid-js";

import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation } from "../../../stores/groupStore";

const [otherUsers, setOtherUsers] = createSignal([]);

function UserList(){
    console.log(otherUsers())
    return(
        <ul>
            {otherUsers().map((username: any) => (<li>{username}</li>))}
        </ul>
    )
}

export function SearchForUser(props: any){

    const handleUserSearch = async (event: any) =>{
        //create something to check for whitespace
        if(event.target.value){
            const rtnObj = await userSearchRequest({username: event.target.value});
            setOtherUsers(rtnObj.usernames)
        }
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
            <UserList/>
        </div>
    )
}

