import { Show, createSignal, onMount } from "solid-js";

import CalendarComponent from "../../../Calendar/Calendar";
import CreateGroupFormNavButtons from "./FormNavButtons";
import TimeInputs from "./TimeInputs";
import { createGroupRequest } from "./apiRequests/createGroupRequest";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

import "../groups.css"


interface createGroupProps{
    placeholderText: string
    id: string
}


function PlainTextInput(props: createGroupProps){
    const handleTextInput = (event: any) =>{
        const inputId = props.id;
        const value = event.target.value;

        setNewGroupCreation([inputId], value);
    }

    return(
        <div>
            <input 
                type="text"
                id={props.id}
                class="create-group-input" 
                placeholder={props.placeholderText}
                onInput={handleTextInput}
            />
        </div>
    )
}

export default function CreateGroup(){
    const [showCalendar, setShowCalendar] = createSignal(false);
    const [showTime, setShowTime] = createSignal(false);

    onMount(() => {
        setNewGroupCreation("pageNumber", 0);
    })

    function handleDate(event: any){
        event.preventDefault();
        setShowCalendar(!showCalendar());
    }

    function handleTime(event: any){
        event.preventDefault();
        setShowTime(!showTime());
    }

    function handleSubmit(event: any){
        event.preventDefault();
        const newGroupAsObject = JSON.parse(JSON.stringify(newGroupCreation));

        const rtnObj = createGroupRequest(newGroupAsObject);
    }

    return(
        <>
            <form class="create-group-form ">
                <Show when={newGroupCreation.pageNumber === 0}>
                    <div class="part">
                        <PlainTextInput 
                            placeholderText="Group Name"
                            id="groupName"
                        />
                        <PlainTextInput placeholderText="Add Group Member" id="groupMembers"/>

                        <div>
                            display group members here
                        </div>

                        <CreateGroupFormNavButtons/>
                    </div>
                </Show>

                <Show when={newGroupCreation.pageNumber === 1}>
                    <div class="part">
                        <PlainTextInput placeholderText="Event" id="currentEvent"/>

                        <div>
                            <button class="create-group-button" onClick={(event:any) => {handleDate(event)}}>
                                Set a Date
                            </button>
                        </div>

                        <Show when={showCalendar()}>
                            <CalendarComponent/>
                        </Show>

                        <div>
                            <button class="create-group-button" onClick={(event:any) => {handleTime(event)}}>
                                Set a Time
                            </button>
                        </div>

                        <Show when={showTime()}>
                            <TimeInputs/>
                        </Show>

                        <CreateGroupFormNavButtons/>
                    </div>
                </Show>

                <button class="create-group-button" onClick={(event:any) => {handleSubmit(event)}}>
                    Submit
                </button>
            </form>
        </>
    )
}


