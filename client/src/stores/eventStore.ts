import { createStore } from "solid-js/store";

import { stringIndex } from "./interfaces";

const eventDefault = {
    eventName: '',
    startDate: '0001-01-01',
    startTime: {hour:0, mintue:0}
}

export function setEventDefault(){
    setNewEventCreation(eventDefault);
}

export const [newEventCreation, setNewEventCreation] = createStore<stringIndex>({
    eventName: '',
    startDate: '0001-01-01',
    startTime: {hour:0, minute:0},
})
