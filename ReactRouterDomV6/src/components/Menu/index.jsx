import './style.css';
import {Link} from 'react-router-dom';

export function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}
