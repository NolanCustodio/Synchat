import React from "react";

import GetEvents from "../Event/GetEvents";

// import { userSlice } from "../../features/user";
// import { useSelector } from "react-redux";

function HomePage(){
    return(
        <div>
            <h1>HomePage</h1>
            
            <GetEvents/>

            <p></p>
        </div>
    )
}

export default HomePage;