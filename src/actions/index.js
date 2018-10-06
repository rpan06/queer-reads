import types from './types';
import axios from 'axios';

export function getResultsData(){  //async and await unnecessary with redux-promise. it is handled
    const resp = axios.get(``);
    return {
        type: types.GET_RESULTS_DATA,
        payload: resp
    }
}

export function getSingleItem(itemId){
    const resp = axios.get(``);
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
