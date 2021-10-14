import { configureStore } from '@reduxjs/toolkit'


import empReducer from './EmpSlice';
import reduxDemoReducer from './ReduxDemoSlice';

console.log('0 store');

const store = configureStore(
    {
        reducer: {
           student:studentreducer
        },
    }
);
export default store;


import empReducer from './EmpSlice';
import reduxDemoReducer from './ReduxDemoSlice';

console.log('0 store');

const store = configureStore(
    {
        reducer: {
           student:studentreducer
        },
    }
);
export default store;