import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';
import users from '../modules/users';

// const rootReducer = combineReducers({
//     counter,
//     users,
// });

// const store = createStore(rootReducer);

const store = configureStore({
    reducer: {
        counter,
    },
});

export default store;
