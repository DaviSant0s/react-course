import React, { Suspense, useState } from "react";

const loadComponent = () => {
  console.log('componente carregando...');
  return import("./lazy-component");
};

const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow(s => !s)}>show {show ? 'ta na tela' : 'não ta na tela'}</button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent/>}
      </Suspense>
      
    </div>
  );
};