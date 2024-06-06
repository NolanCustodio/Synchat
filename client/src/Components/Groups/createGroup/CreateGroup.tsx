import { Show, onMount } from "solid-js";

import { CreateGroupFormNavButtons } from "../../Helper/FormNavButtons";
import { createGroupRequest } from "../apiRequests/groupRequest";
import { TextInput } from "../../Helper/TextInput";
import { SearchForUser, GroupMembersString } from "../../User/otherUserInteractions/SeachForUser";
import { CreateEvent } from "../../Events/CreateEvent";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";
import { newEventCreation } from "../../../stores/eventStore";

import "../groups.css"

export default function CreateGroup(){

    onMount(() => {
        setNewGroupCreation("pageNumber", 0);
    })

    async function handleSubmit(event: any){
        event.preventDefault();
        
        const newGroupAsObject = JSON.parse(JSON.stringify(newGroupCreation));
        const newEventAsObject = JSON.parse(JSON.stringify(newEventCreation));

        const rtnObj = await createGroupRequest(newGroupAsObject, newEventAsObject);
        console.log(rtnObj);
        //Should re-direct to new group page
    }

    return(
        <div>
            <form>
                <Show when={newGroupCreation.pageNumber === 0}>
                    <div class="event-form-container">
                        <TextInput 
                            placeholderText="Group Name"
                            id="groupName"
                            store="group"
                        />

                        <GroupMembersString/>
                        
                        <SearchForUser placeholderText="Add Group Member" id="groupMembers"/>
                    </div>
                </Show>

                <Show when={newGroupCreation.pageNumber === 1}>
                    <CreateEvent/>
                </Show>

                <CreateGroupFormNavButtons/>

                <button class="create-group-button" onClick={(event:any) => {handleSubmit(event)}}>
                    Submit
                </button>
            </form>
        </div>
    )
}


