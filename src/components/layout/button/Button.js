import styles from "../button/Button.module.css";
import curriculo from "../../../assets/curriculo.pdf";

export function Button() {
  return (
    <div className={styles.btn}>
      <a href={curriculo} download>
        <button>Download CV</button>
      </a>
    </div>
  );
}
