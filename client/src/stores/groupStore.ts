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

interface stringIndex{
    [index: string]: any
}

export const [newGroupCreation, setNewGroupCreation] = createStore<stringIndex>({
    pageNumber: 0,
    groupName: '',
    groupMembers: [],
    currentEvent: '',
    startDate: '',
    startTime: {hour: 0, minute: 0},
})