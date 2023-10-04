import React, { useState } from 'react';
import './App.css';
import { useContext } from 'react';

const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0
};

const GlobalContext = React.createContext();

const Div = () => {
  return(
    <>
    <H1 />
    <P />
    </>
  )
}
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: {title, counter} } = theContext
  return(
    <h1>{title} {counter}</h1>
  )
}

const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: {body, counter}, contextState, setContextState } = theContext
  return(
    <p onClick={e => setContextState({...contextState, counter: counter + 1})}>{body}</p>
  )
}

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState, setContextState}}>
        <Div />
    </GlobalContext.Provider>
  );  
}

export default App; 


