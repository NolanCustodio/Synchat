import { createEffect, createSignal, For } from "solid-js";
import { unwrap } from "solid-js/store";

// import { handleTextInput } from "../../Groups/createGroup/TextInput";
import { userSearchRequest } from "./userInteractionRequest/userSearchRequest";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";
import "./userInteraction.css"

const [otherUsers, setOtherUsers] = createSignal([]);
const [ usernameList, setUsernameList ] = createSignal('');

function addUserToList(user: any){
    // console.log(user)

    setNewGroupCreation(
        'groupMembers', 
        [...newGroupCreation.groupMembers, 
            {username: user.username, userId: user.userId}
        ]
    )
}

function UserList(){
    // console.log(otherUsers())
    return(
        <ul class="userDisplayList">
            <For each={otherUsers()}>
                {(item: any) => (
                    <li onClick={() => {addUserToList(item);}} class="singleUserInList">
                        Username: {item.username}
                    </li>
                )}
            </For>
        </ul>
    )
}

export function GroupMembersString(){
    let string = ''

    createEffect(() => {
        const newMembers = unwrap(newGroupCreation.groupMembers);
        // string = newMembers.map((userObj: any) => {
        //     string.concat(`${userObj.username}, `)
        // })
        newMembers.forEach((userObj: any) => {
            console.log('yuser',userObj.username)
            // string.concat(`${userObj.username}, `)
            // string += `${userObj.username}, `;
            
        })
        
        console.log(usernameList());
    })

    return(
        <h2>
            {`Group Members: ${string}`}
        </h2>
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

