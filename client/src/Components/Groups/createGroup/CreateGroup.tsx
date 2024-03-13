import { Show, createSignal, onMount } from "solid-js";
// export const [pageNumber, setPageNumber] = createSignal(0);

import CalendarComponent from "../../../Calendar/Calendar";
import CreateGroupFormNavButtons from "./FormNavButtons";
import TimeInputs from "./TimeInputs";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

import "../groups.css"


interface createGroupProps{
    placeholderText: string
    id: string
}


function PlainTextInput(props: createGroupProps, id: string){
    const handleTextInput = (event: any) =>{
        console.log(event.target);
        console.log(id);
    }

    return(
        <div>
            <input 
                type="text"
                id={id}
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
                        <PlainTextInput placeholderText="Event" id="event"/>

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
            </form>
        </>
    )
}


