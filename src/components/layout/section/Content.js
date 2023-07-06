import styles from "../section/Content.module.css";
import foto from '../../../assets/foto.jpg'

export function Content() {

  return (
    <>
      <section className={styles.container}>
        <div className={styles.container_section_one}>
          <div className={styles.container_text_one}>
            <h1>Frontend
              <br />
              Developer.</h1>
            <p>Gosto de criar produtos de front-end sólidos e escaláveis ​​com ótimas experiências de usuário.</p>
          </div>
          <div>
            {/* <img src={foto} alt="" /> */}
          </div>
        </div>
      </section>
      <section className={styles.container_section_one}>
        <div className={styles.container_text_one}>
          <h2>QUEM SOU EU</h2>
          <span>Desenvolvedor Front-end, com experiência em HTML, CSS, JavaScript e React.js.
            Meu objetivo é criar interfaces de usuário envolventes e eficientes para sites e
            aplicativos. Eu valorizo muito a colaboração em equipe e estou sempre
            buscando aprimorar minhas habilidades técnicas e de comunicação para me
            tornar um desenvolvedor Front-end ainda melhor.</span>
        </div>
        <div className={styles.container_text_one}>
          <h2>MINHAS FORMAÇÕES</h2>
          <h3>Labenu</h3>
          <span>
            BOOTCAMP DE DESENVOLVIMENTO WEB FULL-STACK
            JANIRO/2023 - JANEIRO/2024
            Programa com mais de 1000 horas de experiência prática em desenvolvimento
            Full-stack, guiadas por metodologias ágeis (Kanban/Scrum).
            Entre as habilidades aprendidas durante o curso estão HTML, CSS, JavaScript,
            React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS,
            Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI
            Design.
          </span>
          <h3>QI Faculdade & Escola Técnica</h3>
          <span>CURSO DE TÉCNICO EM INFORMÁTICA PARA INTERNET
            FEVEREIRO/2021 - OUTUBRO/2022
            Neste curso eu aprendi mais sobre o processo de desenvolvimento de
            software seja ele um aplicativo mobile usando Android ou Flutter, um
            website usando JavaScript e/ou uma plataforma de checkout com PHP e MySQL
          </span>
        </div>
      </section>
      <section className={styles.container_section_two}>
        <div className={styles.container_text_two}>
          <h2>Ao longo dos
            <br />
            anos,</h2>
        </div>

      </section>
    </>
  )

}