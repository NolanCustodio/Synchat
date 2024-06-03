import { Show, onMount } from "solid-js";

import { CreateGroupFormNavButtons } from "../../Helper/FormNavButtons";
import { createGroupRequest } from "../apiRequests/groupRequest";
import { TextInput } from "../../Helper/TextInput";
import { SearchForUser, GroupMembersString } from "../../User/otherUserInteractions/SeachForUser";
import { CreateEvent } from "../../Events/CreateEvent";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

import "../groups.css"

export default function CreateGroup(){

    onMount(() => {
        setNewGroupCreation("pageNumber", 0);
    })

    async function handleSubmit(event: any){
        event.preventDefault();
        const newGroupAsObject = JSON.parse(JSON.stringify(newGroupCreation));

        const rtnObj = await createGroupRequest(newGroupAsObject);
        console.log(rtnObj);
        //Should re-direct to new group page
    }

    return(
        <>
            <form class="create-group-form ">
                <Show when={newGroupCreation.pageNumber === 0}>
                    <div class="part">
                        <TextInput 
                            placeholderText="Group Name"
                            id="groupName"
                        />

                        <GroupMembersString/>
                        
                        <SearchForUser placeholderText="Add Group Member" id="groupMembers"/>
                        <CreateGroupFormNavButtons/>
                    </div>
                </Show>

                <Show when={newGroupCreation.pageNumber === 1}>
                    <CreateEvent/>
                </Show>

                <button class="create-group-button" onClick={(event:any) => {handleSubmit(event)}}>
                    Submit
                </button>
            </form>
        </>
    )
}


