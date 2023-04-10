import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//userSelector hook is used to access values from states

// import { useSelector, connect } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//used for sessions
import axios from 'axios';

//Calendar 
//React Calendar: https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//App
import './App.css';
import HomePage     from './HomePage/HomePage';
import NavBar       from './NavBar/NavBar';
import LandingPage  from './LandingPage/LandingPage';
import CreateEvent  from './Event/CreateEvent';
import Login        from './Users/Login';
import Register     from './Users/Register';
// import CheckCookies from './Users/CheckCookies';


//Actions
// import { initState } from '../actions';


function App() {
    axios.defaults.withCredentials = true;

    const dispatch = useDispatch();

    //refactor this to another file
    useEffect(() => {
        axios.get("http://localhost:3001/db/user/sessionLogin").then((response) => {
            // console.log(response);
            const username = response;
        })
    }, []);
    // CheckCookies();


    // const user = useSelector((state) => state.user.value);

    // console.log(useSelector((state) => state));

    // const event = useSelector((state) =>state.eventList.value);
    


    return(
        <div>
            
            <NavBar></NavBar>
            

            <div className="content container">
                {/* <div className='content'>Name: {user.name}</div> 
                <div className='content'>Event: {event.eventName}</div>
                <div className='content'>Topic: {event.eventTopic}</div> */}

                 

                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<HomePage/>}/>
                        <Route path="/LandingPage" element={<LandingPage/>}/>
                        <Route path="/Calendar" element={<Calendar/>}/>
                        <Route path="/CreateEvent" element={<CreateEvent/>}/>
                        
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