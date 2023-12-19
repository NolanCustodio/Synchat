import { createEffect, createSignal } from "solid-js/types/server/reactive.js";

const [data, setData] = createSignal([]);

createEffect(() => {
    fetch("/api/data")
    .then((response) => response.json())
    .then(setData);
})

const GetGroups = () => {
    

    return(
        <div>
            <p>Group name</p>
            <p>Group Description / Other Users</p>
        </div>
    )
}

export default GetGroups;