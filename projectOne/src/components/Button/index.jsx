import { useCounterContext } from '../../context/CounterContext';
import './styles.css';

export default function Button({ children, onButtonClick }) {

  return (
    <button className='buttonComponent'  onClick={onButtonClick}>
        {children}
    </button>
  )
}
