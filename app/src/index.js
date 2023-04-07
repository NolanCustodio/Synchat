import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import App from './components/App.js';

//Import all reducers that are needed for the Application
import userReducer from './features/user';
import eventReducer from './features/event';

//Unused imports as of now
// import reducers from './reducers';
// import { initState } from './actions/index.js';
// import { createRoot } from 'react-dom/client';

// This is the main store and should hold or house all reducers
// Make a reducer in the features directory and then after importing
// it from above make a key for each reducer
const store = configureStore({
    reducer: {
        user: userReducer,
        eventList: eventReducer
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);