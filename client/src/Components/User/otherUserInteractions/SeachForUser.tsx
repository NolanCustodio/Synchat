import { createEffect, createSignal, For } from "solid-js";
import { unwrap } from "solid-js/store";

// import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";
import "./userInteraction.css"

const [otherUsers, setOtherUsers] = createSignal([]);
const [ usernameString, setUsernameString ] = createSignal('');

function addUserToList(user: any){
    // console.log(user)

    setNewGroupCreation(
        'groupMembers', 
        [...newGroupCreation.groupMembers, 
            {username: user.username, userId: user.userId}
        ]
    )

    setUsernameString(`${usernameString()} ${user.username}`)
}

function UserList(){
    // console.log(otherUsers())
    return(
        <ul class="userDisplayList">
            <For each={otherUsers()}>
                {(user: any) => (
                    <li onClick={() => {addUserToList(user);}} class="singleUserInList">
                        Username: {user.username}
                    </li>
                )}
            </For>
        </ul>
    )
}

export function GroupMembersString(){
    return(
        <h2>
            {`Group Members: ${usernameString()}`}
        </h2>
    )
}

export function SearchForUser(props: any){

    const handleUserSearch = async (event: any) =>{
        //create something to check for whitespace
        if(event.target.value){
            const rtnObj = await userSearchRequest({username: event.target.value});
            setOtherUsers(rtnObj.users)
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
                // value={newGroupCreation[props.id]}
                onInput={(event:any) => {
                    // handleTextInput(props.id, event.target.value);
                    handleUserSearch(event);
                }}
            />
            <UserList/>
        </div>
    )
}

