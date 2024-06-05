import { createStore } from "solid-js/store";

import { stringIndex } from "./interfaces";

// export const [groups, setGroups] = createStore([])

// export const [currentGroup, setCurrnetGroup] = createStore({

// })

export const [userGroups, setUserGroups] = createStore([])

interface currentGroup{
    groupName?: string,
    groupId?: string,
    events?: [],
    groupChatId?: string,
    currentEvent?: {},
    users?: []
}

export const [currentGroup, setCurrentGroup] = createStore<currentGroup>({})

// export interface newGroup{
//     pageNumber: number,
//     groupName: string,
//     groupMembers: Array<string>,
//     currentEvent: string,
//     previousEvents: Array<any>,
//     startDate: string,
//     startTime:{hour: number, minute: number}
// }

// interface stringIndex{
//     [index: string]: any
// }

export const [newGroupCreation, setNewGroupCreation] = createStore<stringIndex>({
    pageNumber: 0,
    groupName: '',
    groupMembers: [],
    currentEvent: '',
    startDate: '0001-01-01',
    startTime: {hour: 0, minute: 0},
})