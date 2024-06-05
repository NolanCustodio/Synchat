import { newGroupCreation, setNewGroupCreation } from "../../stores/groupStore";
import { newEventCreation, setNewEventCreation } from "../../stores/eventStore";

// export const handleTextInput = (id: string, value: string) =>{
//     setNewGroupCreation([id], value)
// }

export const handleTextInput = (store: string, id: string, value: string) =>{
    // setNewGroupCreation([id], value)
    if (store === 'event'){
        setNewEventCreation([id], value);
    }else{
        setNewGroupCreation([id], value)
    }


}

const setValue = (store: string, id: string) => {
    let rtnValue;
    
    if(store === 'event'){
        rtnValue = newEventCreation[id]
    }else{
        rtnValue = newGroupCreation[id]
    }
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
                    handleTextInput(props.store, props.id, event.target.value);
                }}
            />
        </div>
    )
}

