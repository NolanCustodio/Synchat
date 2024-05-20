

export function SingleEventCard(props: any){
    console.log(props);

    return(
        <div>
            <div class="single-event-card">
                <h2>{props.event.eventName}</h2>
                <p>{props.event.startDate}</p>
            </div>
        </div>
    )
}