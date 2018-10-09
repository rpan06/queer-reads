import types from '../actions/types';
const DEFAULT_STATE = {
    results: [],
    single: {}
}

export default function(state = DEFAULT_STATE, action){
    switch (action.type){
        case types.CLEAR_SINGLE_ITEM:
            return {...state, single: {}}
        case types.GET_SINGLE_ITEM:
            // console.log("Payload: ", action.payload)
            return {...state, single: action.payload};
        case types.GET_RESULTS_DATA:
            return {...state, results: action.payload};
        default:
            return state;
    }
}
