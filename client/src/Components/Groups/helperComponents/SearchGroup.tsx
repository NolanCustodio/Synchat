import { createEffect, createSignal, onMount } from "solid-js";

import { userGroups } from "../../../stores/groupStore"

import { setGroups } from "../Groups";

export const [urlError, setUrlError] = createSignal(false);
export const [groupSearchInput, setGroupSearchInput] = createSignal('')

export let groupCount = {
    value: 0,
    increment() {
        this.value++;
        return this.value;
    },
    setValue(value: number) {
        this.value = value;
    }
};

//create sub array using search value
function addGroupToList(userInput: string){
    setGroups([])

    userGroups.forEach((group:any) => {
        if(group.groupName.toLowerCase().includes(userInput.toLocaleLowerCase())){
            setGroups((prevArray) => [group, ...prevArray])
        }
    })
}

export function SearchGroups(){
    onMount(() => {
        if(urlError()){
            addGroupToList(groupSearchInput());
            return
        }
    })

    createEffect(() => {
        groupCount.setValue(0);
        setGroups(userGroups);
    })

    function handleInput(event: any){
        setUrlError(false);

        groupCount.setValue(0);

        if(event.target.value){
            addGroupToList(event.target.value);
        }else{
            setGroups(userGroups);
        }
    }


    return(
        <div class="groupSearchBarContainer">
            <input 
                type="text" 
                placeholder="Find Group"
                value={groupSearchInput()}
                class="groupSearchBar"
                onInput={(event:any) => {
                    handleInput(event);
                }}
            />
        </div>
    )
}