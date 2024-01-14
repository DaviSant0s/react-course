import { useCounterContext } from '../../context/CounterContext';
import './styles.css';

export default function Heading({ children }) {
    const {state, actions} = useCounterContext();
  return (
    <h1 className='h1-container'>{state.counter}</h1>
  )
}
