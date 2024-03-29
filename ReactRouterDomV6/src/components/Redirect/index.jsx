import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export function Redirect() {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();
  console.log(timeout.current)

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime(t => t - 1)
    }, 1000)

    if (time <= 0) {
      navigate('/');
    }


    return () => {
      clearTimeout(timeout.current);
    }
  }, [time])

  return (
    <div>
        <h1>Get out of here in: {time}</h1>
    </div>
  )
}
