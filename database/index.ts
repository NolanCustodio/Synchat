// import express from 'express';
// import SignUp from './node/src/Routes/Users/SignUp';

// const PORT = 3002;

// const app = express();
// app.use(express.json());

// SignUp();

// app.listen(PORT, () => {
//     console.log(`Database server running on ${PORT}`)
// })

import RabbitmqClient from './node/src/Services/RabbitMQ/RabbitmqClient';

RabbitmqClient.initialize();