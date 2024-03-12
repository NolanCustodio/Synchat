import { Show, createSignal, onMount } from "solid-js";
import { Calendar } from "fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";


import "../groups.css"

interface createGroupProps{
    placeholderText: string
}

function CreateGroupNavButtons(){
    return(
        <div class="create-group-form-row">
            <button class="create-group-button">
                Back
            </button>
            <button class="create-group-button">
                Next
            </button>
        </div>
    )
}

function PlainTextInput(props: createGroupProps){
    return(
        <div>
            <input class="create-group-input" placeholder={props.placeholderText}></input>
        </div>
    )
}

const CalendarComponent = () =>{
    let calendarE1!: HTMLDivElement;

    onMount(() => {
        const calendar = new Calendar(calendarE1, {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
        });
        calendar.render();
    });

    return(
        <div ref={calendarE1}></div>
    )
}

export default function CreateGroup(){
    const [showCalendar, setShowCalendar] = createSignal(false);

    function handleDate(event: any){
        event.preventDefault();
        setShowCalendar(!showCalendar());
    }


    return(
        <>
            <form class="create-group-form ">
                <div class="part">
                    <PlainTextInput placeholderText="Group Name"/>

                    <PlainTextInput placeholderText="Add Group Member"/>

                    <div>
                        display group members here
                    </div>

                    <CreateGroupNavButtons/>
                </div>

                <div class="part">
                    <PlainTextInput placeholderText="Event Suggestion"/>

                    <div>
                        <button class="create-group-button" onClick={(event:any) => {handleDate(event)}}>
                            Set a Date?
                        </button>
                    </div>

                    <Show when={showCalendar()}>
                        
                        <CalendarComponent/>
                        
                    </Show>

                    <CreateGroupNavButtons/>
                </div>
            </form>
        </>
    )
}


