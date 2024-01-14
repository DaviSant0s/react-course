import * as types from './types';

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({ type: types.INCREASE}),
        decrease: () => dispatch({ type: types.DECREASE}),
        reset: () => dispatch({ type: types.RESET}),
        setCounter: (payload) => dispatch({ type: types.SET_COUNTER, payload}),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
        asyncError: () => asyncErrorFn(dispatch),
    };
}

const asyncIncreaseFn = async (dispatch) => {
    dispatch({ type: types.ASYNC_INCREASE_START })

    return await new Promise(r => {
        setTimeout(() => { 
            dispatch({ type: types.ASYNC_INCREASE_END })
            r('Resolved!');
        }, 2000);
    });
}

const asyncErrorFn = async (dispatch) => {
    dispatch({ type: types.ASYNC_INCREASE_START })

    return await new Promise((resolve, reject) => {
        setTimeout(() => { 
            dispatch({ type: types.ASYNC_INCREASE_ERROR })
            reject(new Error('Deu ruim!'))
        }, 2000);
    });
}