import { Show, createSignal, onCleanup, onMount } from "solid-js";

import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

export default function TimeInputs(){
    const [showHours, setShowHourClock] = createSignal(false);
    const [showMinutes, setShowMinuteClock] = createSignal(false);

    const handleShowClock = (event: any) =>{
        const divId = event.target.id;

        let showHourBool = false;
        let showMinuteBool = false;

        if(divId === 'hour'){
            showHourBool = true
        }

        if(divId === 'minute'){
            showMinuteBool = true
        }

        setShowHourClock(showHourBool);
        setShowMinuteClock(showMinuteBool);
    }

    interface timeInputProps{
        id: string,
        max: string,
    }

    function TimeInput(props: timeInputProps){
        const handleTimeInput = (event: any) => {
            setNewGroupCreation("startTime", (prevList: any) => ({
                ...prevList,
                [props.id]: event.target.value
            }))
        }

        return(
            <input
                class="time-input"
                type="number"
                id={props.id}
                min="0"
                max={props.max}
                value={newGroupCreation.startTime[props.id]}
                onInput={handleTimeInput}
            />
        )
    }

    onMount(() => {
        document.addEventListener('click', handleShowClock);
    })

    onCleanup(() => {
        document.removeEventListener('click', handleShowClock);
    })

    return(
        <div class="">
            <div class="time-row">
                <TimeInput id="hour" max="24"/>
                <p class="time-colon">:</p>
                <TimeInput id="minute" max="60"/>
            </div>
            <div class="time-row">
                <Show when={showHours()}>
                    <div class="clock">
                        Hours
                    </div>
                </Show>
                <Show when={showMinutes()}>
                    <div class="clock">
                        Minutes
                    </div>
                </Show>
            </div>
        </div>
    )
}