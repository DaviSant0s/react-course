import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react"

export const Home = () => {
  const [ counted, setCounted ] = useState([1, 2, 3, 4]);
  const divRef = useRef();

  
  useEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted(c => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  }

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef}/>
    </>
  )
}

export const DisplayCounted = forwardRef(
  function({ counted }, ref){
    const [rand, setRand] = useState('0.24');
    const divRef = useRef();

    const handleClick = () => {
      setRand(Math.random().toFixed(2));
    }

    useImperativeHandle(ref, () => ({
      handleClick,
      divRef: divRef.current,
    }));

    return(
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY:'scroll' }}>

          {counted.map(c => {
            return <p onClick={handleClick} key={`c - ${c}`}>{c} +++ {rand}</p>
          })}
      
      </div>
    );

  
  }
) 
