import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import users from '../../databaseQueries/users';

function CheckCookies() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(1);
    }, []);

    return(
        <div></div>
    )
}

export default CheckCookies();