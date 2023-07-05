import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>anderson</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
