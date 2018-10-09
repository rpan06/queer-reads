import { combineReducers } from 'redux';
import resultsReducer from './results_reducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers ({
        list: resultsReducer,
        // form: formReducer
});

export default rootReducer;
