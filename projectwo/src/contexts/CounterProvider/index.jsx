import { useReducer } from "react";
import { CounterContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

export const CounterProvider = ({children}) => {
    const [ counterState, counterDispatch] = useReducer(reducer, data);

    return (
        <CounterContext.Provider value={{counterState, counterDispatch}}>
            {children}
        </CounterContext.Provider>
    );
}