import { Link } from "react-router-dom";
import './styles.css';

export function Menu() {
  return (
    <nav className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/abc">Abc</Link>
    </nav>
  )
}
