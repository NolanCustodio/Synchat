import { Show, createSignal } from "solid-js"

import { CalendarComponent } from "../../Calendar/Calendar";
import { TextInput } from "../Helper/TextInput"
import { TimeInputs } from "../Helper/TimeInputs";

export function CreateEvent(){
    const [showCalendar, setShowCalendar] = createSignal(false);
    const [showTime, setShowTime] = createSignal(false);

    function handleDate(event: any){
        event.preventDefault();
        setShowCalendar(!showCalendar());
    }

    function handleTime(event: any){
        event.preventDefault();
        setShowTime(!showTime());
    }

    return(
        <div class="event-form-container">
            <TextInput placeholderText="Event" id="eventName" store="event"/>

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
        </div>
    )
}