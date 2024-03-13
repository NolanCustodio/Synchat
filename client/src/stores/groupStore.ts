import { createStore } from "solid-js/store";

export const [groups, setGroups] = createStore({
    number: 0
})

export const [newGroupCreation, setNewGroupCreation] = createStore({
    pageNumber: 0,
    groupName: '',
    groupMembers: [],
    currentEvent: {},
    previousEvents: [],
    startDate: '',
    startTime: '',
})