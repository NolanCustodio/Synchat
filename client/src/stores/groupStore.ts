import { createStore } from "solid-js/store";

export const [groups, setGroups] = createStore({
    number: 0
})

// export interface newGroup{
//     pageNumber: number,
//     groupName: string,
//     groupMembers: Array<string>,
//     currentEvent: string,
//     previousEvents: Array<any>,
//     startDate: string,
//     startTime:{hour: number, minute: number}
// }

export const [newGroupCreation, setNewGroupCreation] = createStore({
    pageNumber: 0,
    groupName: '',
    groupMembers: [],
    currentEvent: '',
    previousEvents: [],
    startDate: '',
    startHour: 0,
    startMinute: 0
    // startTime: {hour: 0, mintue: 0},
})