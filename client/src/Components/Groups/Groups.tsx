import { For, Show, createEffect, createSignal, onMount } from "solid-js";
import { unwrap } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { A, useNavigate } from "@solidjs/router";

import { SearchGroups } from "./helperComponents/SearchGroup";
import { urlError } from "./helperComponents/SearchGroup";

import { userGroups } from "../../stores/groupStore";
export const [ groups, setGroups ] = createSignal<any[]>([])
export const [ currentGroup, setCurrentGroup ] = createSignal({
    groupName: '',
    id: '',
    index: -1,
    events: [],
});

import "./groups.css";

function SingleGroupCard(props: any){
    const handleClick = (event: any, groupInfo: any) => {
        event.preventDefault();
        setCurrentGroup(groupInfo);
        props.navigate(`/Groups/${handleUrl(groupInfo.groupName)}`);
    }

    const handleUrl = (groupName: string): string => {
        return groupName.replace(/\s+/g, '-');
    }

    return(
        <div class="x">
            <A href={handleUrl(props.groupName)} onclick={(event:any ) => {handleClick(event, props)}}>
                <div class="group-card">
                    {/* <!-- Image section --> */}
                    <div class="md:w-1/4 relative">
                        <img class="object-cover w-full h-full group-card-pic" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.murrayglass.com%2Fwp-content%2Fuploads%2F2020%2F10%2Favatar-768x768.jpeg&f=1&nofb=1&ipt=18d27bf08e4e73ae56008ac620be1bb1e39d4841568cc643af4ddc32d598d197&ipo=images" alt="Card image"/>
                    </div>
                    {/* <!-- Content section --> */}
                    <div class=" p-6">
                        <div class="flex items-center justify-between">
                            <h2 class="text-xl font-semibold text-gray-900">
                                {props.groupName}
                                --
                                {props.index}
                            </h2>
                            <span class="text-sm text-gray-600">Category</span>
                        </div>
                        <p class="mt-4 text-gray-700">
                            This is a brief description of the card content.
                            <br/>--
                            {props.events}
                        </p>
                    </div>
                </div>
            </A>
        </div>
    );
};

export default function Groups(){
    const navigate = useNavigate()

    onMount(async() => {
        // const x = await getGroups();
        // console.log(x);
        setGroups(userGroups);
    })
    
    createEffect(() => {
        // console.log(unwrap(groups));
    })

    let index = 0;

    return(
        <>
            <SearchGroups/>

            <Show when={urlError()}>
                <h2>Could not find Group</h2>
            </Show>

            <For each={groups()}>
                {(group: any) => (
                    <SingleGroupCard 
                        groupName={group.groupName}
                        index={index++}
                        events={group.events}
                        id={group.id}
                        navigate={navigate}
                    />
                )}
            </For>
        </>
    );
};