import * as types from './types';

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({ type: types.INCREASE}),
    };
}