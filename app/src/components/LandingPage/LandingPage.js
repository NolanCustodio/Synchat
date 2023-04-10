import React from 'react';

import { useSelector } from 'react-redux';

const LandingPage = () => {
    const username = useSelector((state) => state.user.value);
    console.log(username);

    return(
        <div>
            <h1>Landing Page </h1>
            {/* <p>{username}</p> */}
        </div>
    )
}

export default LandingPage;