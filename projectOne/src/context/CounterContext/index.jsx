import { useContext, useReducer, useRef } from "react"
import { Context } from "./context"
import { initialState } from "./data"
import { reducer } from "./reducer"
import { buildActions } from "./build-actions"

export const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = useRef(buildActions(dispatch)); 

    return <Context.Provider value={{state, actions: actions.current}}>{children}</Context.Provider>
}

 
export const useCounterContext = () => {
    const context = useContext(Context);

    if (typeof context === 'undefined'){
        throw new Error('You have to use useCounterContext inside <CounterContextProvider />');
    }

    return {...context};
} 