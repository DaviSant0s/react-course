import { Link } from "react-router-dom";
import './styles.css';

export function Menu() {
  return (
    <nav className="menu-container">
        <Link to="/">Home - link</Link>
        <a href="/">Home - a</a>
        <Link to="/abc">Abc - link</Link>
        <a href="/abc">Abc - a</a>
    </nav>
  )
}
