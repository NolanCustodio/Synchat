import { createSignal, createEffect, For } from "solid-js";

import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";
import "./userInteraction.css"

const [otherUsers, setOtherUsers] = createSignal([]);

function addUserToList(userId: string){
    console.log('userid',userId);
}

function UserList(){
    console.log(otherUsers())
    return(
        <ul class="userDisplayList">
            <For each={otherUsers()}>
                {(item: any) => (
                    <li onClick={() => {addUserToList(item.userId)}} class="singleUserInList">
                        Username: {item.username}
                    </li>
                )}
            </For>
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
                autocomplete="off"
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

