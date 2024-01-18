import './style.css';
import {Link} from 'react-router-dom';

export function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/posts/24'>Post 10</Link></li>
      </ul>
    </nav>
  )
}
