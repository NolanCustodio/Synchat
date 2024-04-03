import { createEffect, createSignal, onMount } from "solid-js";
// import { groups } from "../../stores/groupStore";

import { navFromURL } from "./navToSingleGroup";

export const [ currnetGroup, setCurrnetGroup ] = createSignal({})

export default function SingleGroupPage(){

    const findGroups = navFromURL();
    console.log('groups', findGroups);

    if(findGroups.length !== 1){
        console.log('wrong')
    }

    
    createEffect(() => {
        console.log(currnetGroup());
    })

    return(
        <div>
            
        </div>
    )
}


