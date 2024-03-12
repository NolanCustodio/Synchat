import { Show, createSignal, Component } from "solid-js";
import { Calendar } from "fullcalendar";
// import dayGridPlugin from "@fullcalendar/daygrid/internal.js";


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

export default function CreateGroup(){
    const [showCalendar, setShowCalendar] = createSignal(false);

    function handleDate(event: any){
        event.preventDefault();
        setShowCalendar(!showCalendar());
    }

    const CalendarComponent: Component<any> = (props) => {
        // Initialize the calendar when the component mounts
        const calendarEl = document.getElementById('calendar');
        if (calendarEl) {
           const calendar = new Calendar(calendarEl, {
             initialView: 'dayGridMonth'
             // Add any FullCalendar options here
           });
           calendar.render();
        }
       
        return (
           <div id="calendar"></div>
        );
    };

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

                    {/* <Show></Show> */}

                    <CalendarComponent/>

                    <CreateGroupNavButtons/>
                </div>
            </form>
        </>
    )
}


