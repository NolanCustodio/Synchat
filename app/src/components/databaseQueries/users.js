import axios from 'axios';



const dbConnection = 'http://localhost:3001/db/user';

export const insertNewUser = async (username, email, password) => {

    const insertUserResponse = await axios.post(`${dbConnection}/createUser`,{
        username,
        email,
        password
    });

    console.log(insertUserResponse.data);

}

export const loginUser = async (username, password) => {

    const loginUserResponse = await axios.post(`${dbConnection}/loginUser`, {
        username,
        password
    });

    console.log(loginUserResponse.data);
}