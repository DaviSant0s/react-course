import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>
});

function App() {
  const [ counter, setCounter ] = useState(0);

  const incrementCounter = useCallback(
    
    (num) => {
      setCounter((c) => c + num)
    
    }
    
    , []);

  console.log('pai renderizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter}/>
    </div>
  );  
}

export default App; 


