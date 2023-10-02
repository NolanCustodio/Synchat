import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import events from '../../databaseQueries/events';

import Event from "./event";

const GetEvents = () => {
    const dispatch = useDispatch();

    useEffect (() =>{
        // console.log(1);
        events.getEvents(dispatch);
    }, []);

    const eventsArray = useSelector((state) => state.eventList.value);

    // console.log(eventsArray);
    // console.log(eventsArray.map((singleEvent) => singleEvent.eventName))

    // console.log(events.getEvents(dispatch));
    
    return(
        <div>
            {eventsArray.map(singleEvent => {
                return(
                    <Event key={singleEvent.eventID} eventName={singleEvent.eventName} eventTopic={singleEvent.eventTopic}/>
                )
            })}
        </div>
    );
};


export default GetEvents;