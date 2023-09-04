import React, {useEffect} from "react";

import sendRabbit from './sendRabbit.js';


function rabbitmq() {

    useEffect (() =>{
        // console.log(1);
        const msg = sendRabbit();
    }, []);
}

export default rabbitmq;