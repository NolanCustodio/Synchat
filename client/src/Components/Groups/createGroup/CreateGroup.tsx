import { Show, createSignal } from "solid-js";
export const [pageNumber, setPageNumber] = createSignal(1);

import CalendarComponent from "../../../Calendar/Calendar";
import CreateGroupFormNavButtons from "./FormNavButtons";
import TimeInputs from "./TimeInputs";

import "../groups.css"

interface createGroupProps{
    placeholderText: string
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
        <>
            <form class="create-group-form ">
                <Show when={pageNumber() === 0}>
                    <div class="part">
                        <PlainTextInput placeholderText="Group Name"/>
                        <PlainTextInput placeholderText="Add Group Member"/>

                        <div>
                            display group members here
                        </div>

                        <CreateGroupFormNavButtons/>
                    </div>
                </Show>

                <Show when={pageNumber() === 1}>
                    <div class="part">
                        <PlainTextInput placeholderText="Event Suggestion"/>

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


