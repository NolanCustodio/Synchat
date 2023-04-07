import React, {useState} from "react";
// import { Link } from "react-router-dom";

import { insertEvent } from '../databaseQueries/events';

// function printData(event){
//     event.preventDefault();

//     const dispatch = useDispatch();

//     let eventName = "";
//     let eventTopic = "";

//     eventName = document.getElementById('eventName').value;
//     eventTopic = document.getElementById('eventTopic').value;
//     // console.log(eventName, eventTopic);

//     dispatch(createEvent({eventName: eventName, eventTopic: eventTopic}));

//ex

// }

function CreateEvent() {
    const [newEventName, setEventName] = useState("");
    const [newEventTopic, setEventTopic] = useState("");


    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();

                insertEvent(newEventName, newEventTopic);
            }}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Event Name</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="eventName" 
                        placeholder="Event Name"
                        onChange={(e) => {
                            setEventName(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Topic</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="eventTopic" 
                        placeholder="Topic"
                        onChange={(e) =>{
                            setEventTopic(e.target.value);
                        }}
                    />    
                </div>

                <button className="btn btn-primary">Make Event</button>
            </form>
        </div>
    )
}

export default CreateEvent;