import React from 'react';

// import { useSelector } from 'react-redux';

import sendRabbit from '../RabbitMQ/sendRabbit';

const LandingPage = () => {
    // const username = useSelector((state) => state.user.value);
    // console.log(username);

    return(
        <div>
            <h1>Landing Page </h1>
            {/* <p>{username}</p> */}

            <button className="btn btn-primary" onClick={(e) =>{
                e.preventDefault();

                sendRabbit();
            }}>Test Rabbit</button>
        </div>
    )
}

export default LandingPage;