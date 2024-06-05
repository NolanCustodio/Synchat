import { createStore } from "solid-js/store";

import { stringIndex } from "./interfaces";

export const [newEventCreation, setNewEventCreation] = createStore<stringIndex>({
    eventName: '',
    startDate: '0001-01-01',
    startTime: {hour:0, minute:0},
})
