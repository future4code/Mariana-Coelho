//Onde combinamos os reducers 

import { combineReducers } from 'redux';
import tasks from './todos';

const rootReducer = combineReducers({
    tasks: tasks
})

export default rootReducer;