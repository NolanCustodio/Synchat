import React from "react";
// import { Link } from "react-router-dom";


const Event = (props) => {

    return(
        <div className="card">
            <h1>Event Name: {props.eventName}</h1>
            <p>Event Topic: {props.eventTopic}</p>
        </div>
    )
}

export default Event;