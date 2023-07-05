import { FaInstagram, FaGithub, FaLinkedin, FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <span>
        <Link className={styles.email} to="/email">
          andersonribeironunes09gmail.com
        </Link>
      </span>
    </footer>
  );
}
