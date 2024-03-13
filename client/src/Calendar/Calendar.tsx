import { onMount } from "solid-js";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


export default function CalendarComponent(){
    let calendarE1!: HTMLDivElement;

    onMount(() => {
        const calendar = new Calendar(calendarE1, {
            plugins: [interactionPlugin, dayGridPlugin],
            initialView: 'dayGridMonth',
            editable: true,
            selectable: true,
            select: function(info){
                console.log("clicked here", info.startStr);
            }
        });
        calendar.render();
    });

    return(
        <div ref={calendarE1}></div>
    )
}