import { newGroupCreation, setNewGroupCreation } from "../../../stores/groupStore";

export default function CreateGroupFormNavButtons(){

    function handleButton(event: any, isNext: boolean){
        event.preventDefault()
        
        if (isNext){
            setNewGroupCreation("pageNumber", newGroupCreation.pageNumber + 1);
        }else{
            setNewGroupCreation("pageNumber", newGroupCreation.pageNumber - 1);
        }

        if(newGroupCreation.pageNumber < 0){
            setNewGroupCreation("pageNumber",0);
        };

        //Set this max to number of sub-pages
        //for this form
        if(newGroupCreation.pageNumber > 1){
            setNewGroupCreation("pageNumber", 1);
        };

    }

    return(
        <div class="create-group-form-row">
            <button class="create-group-button"
                onClick={(event:any) => {handleButton(event, false)}}
            >
                Back
            </button>
            <button class="create-group-button"
                onClick={(event:any) => {handleButton(event, true)}}
            >
                Next
            </button>
        </div>
    )
}