import { useCallback, useEffect } from "react"
import { useState } from "react"

const useAsync = (asyncFunction, shuldRun) => {
  const [ state, setState ] = useState({
    result: null,
    error: null, 
    status: 'idle',
  });
  
  const run = useCallback( async () => {
    console.log('EFFECT', new Date().toLocaleDateString())

    setState({
      result: null,
      error: null, 
      status: 'pending',
    });


    return asyncFunction()
      .then(response => {
        setState({
          result: response,
          error: null, 
          status: 'settled',
        });
      })
      .catch(err => {
        setState({
          result: null,
          error: err, 
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shuldRun){
      run();
    }
  }, [run, shuldRun])

  

  return [run, state.result, state.error, state.status]
}

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
}

export const Home = () => {
  const [ reFetchData, result, error, status ] = useAsync(fetchData, true);   


  const handleClick = () => {
    reFetchData();
  }


  if (status === 'idle'){
    return <p>idle: Nada executando</p>
  }
  if (status === 'pending'){
    return <p>pending: Loading...</p>
  }

  if (status === 'error'){
    return <pre>error: {error.message}</pre>
  }
  if (status === 'settled'){
    return <pre onClick={handleClick}>settled: {JSON.stringify(result, null, 2)}</pre>
  }


  return 'ixi, deu ruim!';
}
