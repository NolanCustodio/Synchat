import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

//userSelector hook is used to access values from states

// import { useSelector, connect } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//used for sessions
import axios from 'axios';

//Calendar 
//React Calendar: https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//Synchat
import './App.css';
import HomePage     from './Synchat/HomePage/HomePage';
import NavBar       from './NavBar/NavBar';
import LandingPage  from './Synchat/LandingPage/LandingPage';
import CreateEvent  from './Synchat/Event/CreateEvent';
import Login        from './Synchat/Users/Login';
import Register     from './Synchat/Users/Register';
// import CheckCookies from './Users/CheckCookies';

//Static Info
import Landing      from './personalInfo/index';
import Resume       from './personalInfo/resume.js';

//RabbitMQ
// import sendRabbit from './RabbitMQ/sendRabbit';
// import clientSocket from 'socket.io-client';


//Actions
// import { initState } from '../actions';


function App() {
    axios.defaults.withCredentials = true;

    // const dispatch = useDispatch();

    // CheckCookies();

    // const user = useSelector((state) => state.user.value);

    // console.log(useSelector((state) => state));

    // const event = useSelector((state) =>state.eventList.value);
    
    //rabbit testing

    useEffect (() =>{
        // console.log(1);
        // sendRabbit();
    }, []);


    return(
        <div>
            
            <NavBar></NavBar>
            
            <div>
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/resume">Resume</a>
                <a className="navbar-brand" href="/synchat">Synchat</a>
                {/* <a className="navbar-brand" href="/Synchat/LandingPage">LandingPage</a> */}
                <a className="navbar-brand" href="/Synchat/CreateEvent">CreateEvent</a>
            </div>

            <div className="content container">
                {/* <div className='content'>Name: {user.name}</div> 
                <div className='content'>Event: {event.eventName}</div>
                <div className='content'>Topic: {event.eventTopic}</div> */}
                
                <BrowserRouter>
                    <Routes>
                        {/* Static Landing Pages */}
                        <Route path='/' exact element={<Landing/>} />
                        <Route path='/resume' element={<Resume/>}/>

                        {/* Synchat Components */}
                        <Route path="/synchat" exact element={<HomePage/>}/>
                        <Route path="/synchat/LandingPage" element={<LandingPage/>}/>
                        <Route path="/synchat/Calendar" element={<Calendar/>}/>
                        <Route path="/synchat/CreateEvent" element={<CreateEvent/>}/>
                        
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Register" element={<Register/>}/>

                    </Routes>
                </BrowserRouter>
            </div>
            
        </div>
    )
}

// const mapStatetoProps = (state) =>{
//     return {
//         event : state.event,
//     }
// }

// export default connect(mapStatetoProps, {initState})(App);

export default App;