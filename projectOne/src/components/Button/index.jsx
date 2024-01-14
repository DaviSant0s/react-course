import { useCounterContext } from '../../context/CounterContext';
import './styles.css';

export default function Button({ children, onButtonClick, disabled = false }) {

  return (
    <button disabled={disabled} className='buttonComponent'  onClick={onButtonClick}>
        {children}
    </button>
  )
}
