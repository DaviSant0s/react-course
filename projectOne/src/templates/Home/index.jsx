import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const ReactHooks = () => {
  console.log('-------------------FILHO-------------------')
  console.log('%cRenderização do componenete FILHO Começando...', 'color: green');

  // Lazy Initializer #1
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString();
    console.log('%cState Lazy initializer - (useState + InitialValue) = ' + state, 'color: green');
    return state;
  });

  const renders = useRef(0);

  
  
  useEffect(() => {
    const listener = () => console.log('Listener...');
    console.log('%cuseEffect -> Empty dependencies', 'color: #dbc70f');
    
    return () => {
      console.log('%cuseEffect (Cleanup) -> Empty dependencies', 'color: #dbc70f');
    };
  }, []);
  
  useEffect(() => {
    console.log('%cuseEffect -> No Dependencies', 'color: #dbc70f');
    renders.current += 1;

    return () => {
      console.log('%cuseEffect (Cleanup) -> No Dependencies', 'color: #dbc70f');
    };
  });
  
  useLayoutEffect(() => {
    console.log('%cuseLayoutEffect', 'color: #e61a4d');

    return () => {
      console.log('%cuseLayoutEffect (Cleanup)', 'color: #e61a4d');
    };
  });

  useEffect(() => {
    console.log('%cuseEffect (UPDATE state1) ' + state1, 'color: #dbc70f');
  }, [state1]);
  
  console.log('%cComponente FILHO ' + renders.current + ' Finalizando...', 'color: green');
  return (
    <div onClick={() => setState1(new Date().toLocaleString('pt-br'))} style={{ fontSize: '60px' }}>
      State: {state1}
    </div>
  );
};

export const Home = () => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1;
  });

  console.log('-------------------PAI-------------------')
  console.log(`%cRenderização do Componente PAI ${renders.current} -> Começando...`, 'color: green');
  const [show, setShow] = useState(false);
  console.log('%cInicializador do state - (useState com o valor nicial) = ' + show, 'color: green');
  console.log(`%cRenderização do Componente PAI ${renders.current} -> Finalizando...`, 'color: green');

  return (
    <div>
      <p onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <ReactHooks />}
    </div>
  );
};