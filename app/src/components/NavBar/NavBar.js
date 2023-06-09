import React from 'react';

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/LandingPage">LandingPage</a>
            <a className="navbar-brand" href="/Calendar">Calendar</a>
            <a className="navbar-brand" href="/CreateEvent">Create Event</a>

            <a className="btn btn-primary mr-2" href='/Login'>Login</a>
            <a className="btn btn-light btn-outline-secondary mr-2" href='/Register'>Register</a>
            
        </nav>
    )
}

export default NavBar;