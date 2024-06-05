import { onMount } from "solid-js";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { setNewEventCreation } from "../stores/eventStore";


export function CalendarComponent(){
    let calendarE1!: HTMLDivElement;

    function handleDate(date: string){
        setNewEventCreation("startDate", date)
    }

    onMount(() => {
        const calendar = new Calendar(calendarE1, {
            plugins: [interactionPlugin, dayGridPlugin],
            initialView: 'dayGridMonth',
            editable: true,
            selectable: true,
            select: function(info){
                handleDate(info.startStr);
            }
        });
        calendar.render();
    });

    return(
        <div ref={calendarE1}></div>
    )
}