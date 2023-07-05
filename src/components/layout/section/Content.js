import styles from "../section/Content.module.css";
import foto from '../../../assets/foto.jpg'

export function Content() {

  return (
    <article className={styles.container}>
      <div className={styles.container_section}>
        <div>
          <h1>Frontend Developer.</h1>
        </div>
        <div>
          <img src={foto} alt="" />
        </div>
      </div>
    </article>
  )

}