import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

export const handleTextInput = (id: string, value: string) =>{
    setNewGroupCreation([id], value)
}

export function TextInput(props: any){
    // const handleTextInput = (event: any) =>{
    //     const inputId = props.id;
    //     const value = event.target.value;

    //     setNewGroupCreation([inputId], value);
    // }

    // console.log(`component ${props.id}`, props);

    return(
        <div>
            <input 
                type="text"
                id={props.id}
                class="create-group-input" 
                placeholder={props.placeholderText}
                value={newGroupCreation[props.id]}
                onInput={(event:any) => {
                    handleTextInput(props.id, event.target.value);
                }}
            />
        </div>
    )
}

