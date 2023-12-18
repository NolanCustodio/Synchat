import { A } from "@solidjs/router"

export default () => {
    return(
        <div>
            <button>
                <A href="/">index</A> 
            </button>
            <button>
                <A href="/HomePage">Home</A>  
            </button>
            <button>
                <A href="/LandingPage">Landing</A>  
            </button>
            <button>
                <A href="/Event">Event</A>  
            </button>
        </div>
    )
}

