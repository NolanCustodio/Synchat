import { createSignal, For } from "solid-js";
import { unwrap } from "solid-js/store";

// import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";
import "./userInteraction.css"

const [otherUsers, setOtherUsers] = createSignal([]);
export const [ selectedUsers, setSelectedUsers ] = createSignal([]);


function addUserToList(user: any){
    for (let i = selectedUsers().length - 1; i >= 0; i--){
        if(user.userId === unwrap(selectedUsers())[i]['userId']){
            return;
        }
    }

    setNewGroupCreation(
        'groupMembers', 
        [...newGroupCreation.groupMembers, 
            {username: user.username, userId: user.userId}
        ]
    )

    setSelectedUsers(newGroupCreation.groupMembers);
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
    const handleRemoveUser = (event: any, user: any) =>{
        event.preventDefault();

        setNewGroupCreation('groupMembers',[
            ...newGroupCreation.groupMembers.filter((item: any) => item.userId !== user.userId)
        ])
        setSelectedUsers(newGroupCreation.groupMembers);
    }
    
    return(
        <div>
            <p>Users:</p>
            <div class="selectedUsers">
                <For each={selectedUsers()}>
                    {(user: any) =>(
                        <div>
                            <p>{user.username}</p>
                            <button class="removeUser" onClick={(event:any) => (handleRemoveUser(event, user))}>Remove</button>
                        </div>
                    )}
                </For>
            </div>
        </div>
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

