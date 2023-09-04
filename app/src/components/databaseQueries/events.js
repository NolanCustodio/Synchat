import axios from 'axios';

import { populateEventList } from '../../features/event';

const dbConnection = 'http://localhost:3001/db/event';

export const insertEvent = async (eventName, eventTopic) =>{

    // console.log('inside insertEvent func')

    console.log(`${dbConnection}/insert`)

    axios.post(`${dbConnection}/insert`, {
        eventName:eventName,
        eventTopic:eventTopic
    }).then(() => {
        // console.log('done');
        // alert('nice');

        //Change this to go to new event that has just been made
        window.location.href = "/"
    });

}

//Refactor above function to use rabbitmq instead of axios


const getEvents = async (dispatch) => {

    const eventsArray = await axios.get(`${dbConnection}/get`);

    //Change above axios call with a rabbitMQ query instead
    
    // console.log(2);
    // console.log(eventsArray.data);
    
    dispatch(populateEventList(eventsArray.data));

}


export default{
    insertEvent, getEvents
}