import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const useMyHook = (callBack, delay = 1000) => {
  const savedCb = useRef();

  // pra gente lembrar qual foi o último callback que foi chamado
  useEffect(() => {
    savedCb.current = callBack;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    // garante que todo vez que eu sair do componente, o intervalo vai set limpo
    return () => clearInterval(interval);

  }, [delay]);


}

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ delay, setDelay ] = useState(1000);
  const [ incrementor, setIncrementor ] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (

    <div>
        <h1>{counter}</h1>
        <h1>{delay}</h1>

        <button onClick={() => setDelay( (d) => d + incrementor )}>+ {incrementor}</button>
        <button onClick={() => setDelay( (d) => d - incrementor )}>- {incrementor}</button>

        <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))}></input>
    </div>

  );  
}

export default App; 
