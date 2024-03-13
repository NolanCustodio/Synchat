import {pageNumber, setPageNumber} from "./CreateGroup";

export default function CreateGroupFormNavButtons(){

    function handleButton(event: any, isNext: boolean){
        event.preventDefault()
        if (isNext){
            setPageNumber(pageNumber() + 1);
        }else{
            setPageNumber(pageNumber() - 1);
        }

        if(pageNumber() < 0){
            setPageNumber(0);
        };

        //Set this max to number of sub-pages
        //for this form
        if(pageNumber() > 1){
            setPageNumber(1);
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