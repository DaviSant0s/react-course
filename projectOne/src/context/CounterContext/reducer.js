import { initialState } from './data';
import * as types from './types';

export const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case types.INCREASE:
            return { ...state, counter: state.counter + 1};
        case types.DECREASE:
            return { ...state, counter: state.counter - 1};
        case types.RESET:
            return { ...initialState};
        case types.SET_COUNTER:
            return { ...state, ...action.payload };
        case types.ASYNC_INCREASE_START:
            return { ...state, loading: true };
        case types.ASYNC_INCREASE_END:
            return { ...state, loading: false , counter: state.counter + 1};
        case types.ASYNC_INCREASE_ERROR:
            return { ...state, loading: false};
    }
    
    return state;
}