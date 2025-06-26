// src/App.js
import React from "react";
import { AiOutlineCode, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import styles from "./App.module.css";
import ProjectCard from "./components/ProjectCard";

import logo from "./tm_logo.png";

// Dados dos projetos - substitua com seus próprios projetos!
const projects = [
  {
    type: "interactive", // Este projeto será interativo via iframe
    image: "https://placehold.co/600x400/2a5c8d/ffffff?text=Tic+Tac+Toe",

    // image: "https://github.com/greathiago/react-tic-tac-toe/raw/main/public/tictactoe-screenshot.png", // Exemplo de URL de imagem do repositório
    title: "Jogo da Velha (Tic-Tac-Toe)",
    description:
      "Um clássico jogo da velha desenvolvido para demonstrar lógica de estado, componentização e manipulação de eventos em React. Jogue diretamente aqui no portfólio!",
    tech: ["React", "JavaScript", "CSS Modules"],
    liveLink: "https://greathiago.github.io/tic-tac-toe/", // URL final do projeto no GitHub Pages
    repoLink: "https://github.com/greathiago/tic-tac-toe",
  },
  {
    type: "demo", // Este projeto será uma demo via GIF
    image: "https://placehold.co/600x400/3d5afe/ffffff?text=API+de+Produtos",

    // image: "https://github.com/greathiago/java-product-api/raw/main/public/product-api-demo.gif", // URL do GIF de demonstração
    title: "API de Produtos com Java",
    description:
      "Uma API RESTful completa construída com Spring Boot para gerenciar um catálogo de produtos. Implementa todas as operações CRUD (Criar, Ler, Atualizar, Deletar) e utiliza um banco de dados em memória.",
    tech: ["Java", "Spring Boot", "Maven", "API Rest", "H2 Database"],
    liveLink:
      "https://github.com/greathiago/java-product-api/raw/main/public/product-api-demo.gif", // O link 'live' aponta para o GIF para o modal
    repoLink: "https://github.com/greathiago/java-product-api",
  },
  {
    type: "demo", // Este projeto também será uma demo via GIF
    image: "https://placehold.co/600x400/e8f0fe/1a365d?text=Gerador+de+Citações",

    // image: "https://github.com/greathiago/python-quote-api/raw/main/public/quote-api-demo.gif", // URL do GIF de demonstração
    title: "Gerador de Citações com Python",
    description:
      "Uma API leve e rápida desenvolvida com Flask que retorna citações inspiradoras de forma aleatória. Um ótimo exemplo de microsserviço e manipulação de dados em Python.",
    tech: ["Python", "Flask", "API Rest", "JSON"],
    liveLink:
      "https://github.com/greathiago/python-quote-api/raw/main/public/quote-api-demo.gif", // O link 'live' aponta para o GIF para o modal
    repoLink: "https://github.com/greathiago/python-quote-api",
  },
];

const App = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {/* MODIFICAÇÃO: Adicionado o contêiner interno */}
        <div className={styles.navbarInner}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
            <span className={styles.logo}>Thiago Matos</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.link}>
              Sobre
            </a>
            <a href="#projects" className={styles.link}>
              Projetos
            </a>
            <a href="#skills" className={styles.link}>
              Habilidades
            </a>
            <a href="#contact" className={styles.cta}>
              Contato
            </a>
          </div>
        </div>
      </nav>

      <header className={styles.hero} id="top">
        <div className={styles.heroContent}>
          <img src={logo} alt="Logo Hero" className={styles.heroLogo} />
          <h1 className={styles.title}>Thiago Moreira de Matos</h1>
          <h2 className={styles.subtitle}>
            Transformando ideias em código. Desenvolvedor Front-end especialista
            em React.
          </h2>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <AiOutlineCode size={32} />
              <span>5+ Anos de Experiência</span>
            </div>
            <div className={styles.statItem}>
              <FiSmartphone size={32} />
              <span>50+ Componentes Reutilizáveis</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}></div>
      </header>

      <section id="projects" className={styles.section}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Projetos em Destaque</h3>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.profile}`}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Sobre Mim</h3>
          <p className={styles.bio}>
            Com 5 anos de experiência, sou um desenvolvedor front-end focado em
            criar experiências digitais excepcionais e de alta performance.
            Minha especialidade é o ecossistema React, mas também tenho sólidos
            conhecimentos em C#, Java e Python.
            <br />
            <br />
            Na <strong>Ene-soluções</strong>, terceirizado para a{" "}
            <strong>Algar Telecom</strong>, liderei iniciativas que resultaram
            em uma <strong>redução de 50% no tempo de carregamento</strong> do
            site e na implementação de mais de 50 componentes reutilizáveis.
            Minha paixão é resolver problemas complexos e colaborar com equipes
            para entregar produtos de alta qualidade que geram resultados.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <h4>Ene-soluções (Algar Telecom)</h4>
              <span className={styles.timelineDate}>2019 - 2024</span>
              <ul className={styles.timelineList}>
                <li>Otimização de performance (+50% de ganho).</li>
                <li>Desenvolvimento de componentes reutilizáveis.</li>
                <li>Liderança técnica em projetos complexos.</li>
              </ul>
            </div>
            <div className={styles.highlightCard}>
              <h4>Sankhya - Jiva (Estágio)</h4>
              <span className={styles.timelineDate}>2018 - 2019</span>
              <ul className={styles.timelineList}>
                <li>
                  Desenvolvimento de módulos de automação em Java para o sistema
                  de RH.
                </li>
                <li>Redução de 15% no tempo de processamento de tarefas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Tecnologias</h3>
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
              "C#",
              "Java",
            ].map((skill) => (
              <div key={skill} className={styles.skillCard}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>Gostou do que viu?</h3>
          <p className={styles.footerText}>
            Estou disponível para novos desafios e projetos. Vamos conversar!
          </p>
          <div className={styles.contactInfo}>
            <a
              href="mailto:thiago10.000@hotmail.com"
              className={styles.contactLink}
            >
              thiago10.000@hotmail.com
            </a>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/greathiago"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <AiFillGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-moreira-de-matos-a92437172/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <AiFillLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
