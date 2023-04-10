import axios from 'axios';

import { login } from '../../features/user';

const dbConnection = 'http://localhost:3001/db/user';

export const insertNewUser = async (username, email, password) => {

    const insertUserResponse = await axios.post(`${dbConnection}/createUser`,{
        username,
        email,
        password
    });

    console.log(insertUserResponse.data);

}

export const loginUser = async (dispatch, username, password) => {

    const loginUserResponse = await axios.post(`${dbConnection}/loginUser`, {
        username,
        password
    });

    dispatch(login(loginUserResponse.data));

    console.log(loginUserResponse.data);

    window.location.href = "/landingPage"
}