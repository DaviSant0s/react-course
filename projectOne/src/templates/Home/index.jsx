import { useState } from "react";
import { LazyComponent } from "./lazy-component";


export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onClick={() => setShow(s => !s)}>show {show ? 'ta na tela' : 'não ta na tela'}</button>
      </p>
      {show && <LazyComponent/>}
    </div>
  );
};