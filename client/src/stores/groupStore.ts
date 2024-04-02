import { createStore } from "solid-js/store";

// export const [groups, setGroups] = createStore([])

export const [currentGroup, setCurrnetGroup] = createStore({

})

export const [userGroups, setUserGroups] = createStore([])

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
    startDate: '0001-01-01',
    startTime: {hour: 0, minute: 0},
})