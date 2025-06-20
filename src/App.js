// App.js
import React, { useEffect } from "react";
import { AiOutlineCode, AiFillGithub } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import styles from "./App.module.css";

const App = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img src="/tm_logo.png" alt="Logo" className={styles.logoImage} />
        <div className={styles.navLinks}>
          <a href="#top" className={styles.link}>
            Topo
          </a>
          <a href="#profile" className={styles.link}>
            Perfil
          </a>
          <a href="#experience" className={styles.link}>
            Experiência
          </a>
          <a href="#skills" className={styles.link}>
            Habilidades
          </a>
          <a href="#contact" className={styles.cta}>
            Contato
          </a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Thiago Moreira de Matos</h1>
          <h2 className={styles.subtitle}>Desenvolvedor Front-end</h2>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <AiOutlineCode size={32} />
              <span>5+ Anos Exp</span>
            </div>
            <div className={styles.statItem}>
              <FiSmartphone size={32} />
              <span>50+ Componentes</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}></div>
      </header>

      <section id="profile" className={`${styles.section} ${styles.profile}`}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Sobre Mim</h3>
          <p className={styles.bio}>
            Desenvolvedor front-end apaixonado por criar experiências digitais
            excepcionais. Especialista em React com 5 anos de experiência em
            desenvolvimento de interfaces de alta performance. Comprometido com
            código limpo e melhoria contínua.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <span>50%+</span>
              <p>Redução no tempo de carregamento</p>
            </div>
            <div className={styles.highlightCard}>
              <span>20%↑</span>
              <p>Aumento no engajamento</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Experiência Profissional</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h4>Ene-soluções</h4>
                <span className={styles.timelineDate}>2019 - 2024</span>
                <ul className={styles.timelineList}>
                  <li>Otimização de performance (50%+ ganho)</li>
                  <li>Desenvolvimento de componentes reutilizáveis</li>
                  <li>Liderança técnica em projetos complexos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Habilidades</h3>
          <div className={styles.skillsGrid}>
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "CSS3",
              "Git",
              "Python",
              "HTML5",
              "Sass",
              "Redux",
            ].map((skill) => (
              <div key={skill} className={styles.skillCard}>
                <div className={styles.skillIcon}></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>Vamos conversar!</h3>
          <div className={styles.contactInfo}>
            <a
              href="mailto:thiago10.000@hotmail.com"
              className={styles.contactLink}
            >
              thiago10.000@hotmail.com&nbsp;
            </a>
            <a
              href="https://github.com/greathiago"
              className={styles.contactLink}
            >
              <AiFillGithub /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
