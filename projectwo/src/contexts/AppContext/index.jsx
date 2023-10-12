import { createContext, useState } from "react";
import { globalState } from "./data";


export const GlobalContext = createContext();

export const AppContext = (props) => {
    const [ state, setState ] = useState(globalState);
    console.log(props)

    return (
        <GlobalContext.Provider value={{state, setState}}>
            {props.children}
        </GlobalContext.Provider>
    );
}