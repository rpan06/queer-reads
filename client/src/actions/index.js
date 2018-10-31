import types from './types';
import axios from 'axios';

export function getResultsData(filter){  //async and await unnecessary with redux-promise. it is handled
    const resp = axios.get(`/api/search/${filter}`);
    // const resp = resultsData;
    return {
        type: types.GET_RESULTS_DATA,
        payload: resp
    }
}

export function getSingleItem(ISBN){
    const resp = axios.get(`/api/book/${ISBN}`);
    // const resp = singleData[0];
    return {
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}

export function clearSingleItem(){
    return{
        type: types.CLEAR_SINGLE_ITEM
    }
}

export function clearResults(){
    return{
        type: types.CLEAR_RESULTS
    }
}
