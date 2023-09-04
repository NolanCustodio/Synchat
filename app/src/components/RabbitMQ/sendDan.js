import clientSocket from 'socket.io-client';

//urls for backend
export const API_URL = "http://localhost:5672";
const socket = clientSocket(`$(API_URL)`);

export const createMessage = (newMessage) =>{
    socket.on("cookie", (result) => {
        result = JSON.parse(result);
        newMessage(result);
    });
}