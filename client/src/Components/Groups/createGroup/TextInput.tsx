import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

export const handleTextInput = (id: string, value: string) =>{
    setNewGroupCreation([id], value)
}

export function TextInput(props: any){

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

