import { combineReducers } from 'redux';
import listReducer from './list_reducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers ({
        list: listReducer,
        // form: formReducer
});

export default rootReducer;
