
import "../groups.css"


export default function CreateGroup(){
    return(
        <form class="create-group-form ">
            <div>
                <input class="create-group-input" placeholder="Group Name"></input>
            </div>

            <div>
                <input class="create-group-input" placeholder="Add Friend"></input>
            </div>
        </form>
    )
}


