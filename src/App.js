import { AiOutlineCode, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import styles from './App.module.css';
import ProjectCard from './components/ProjectCard';

const logo = process.env.PUBLIC_URL + '/tm_logo.png';

const projects = [
  {
    type: "interactive", // Este projeto será interativo via iframe
    image: "https://placehold.co/600x400/2a5c8d/ffffff?text=Tic+Tac+Toe",
    title: "Jogo da Velha (Tic-Tac-Toe)",
    description:
      "Um clássico jogo da velha desenvolvido para demonstrar lógica de estado, componentização e manipulação de eventos em React. Jogue diretamente aqui no portfólio!",
    tech: ["React", "JavaScript", "CSS Modules"],
    liveLink: "https://greathiago.github.io/tic-tac-toe/",
    repoLink: "https://github.com/greathiago/tic-tac-toe",
  },
  {
    type: "demo", // Este projeto será uma demo via GIF
    image: "https://placehold.co/600x400/3d5afe/ffffff?text=API+de+Produtos",
    title: "API de Produtos com Java",
    description:
      "Uma API RESTful completa construída com Spring Boot para gerenciar um catálogo de produtos. Implementa todas as operações CRUD (Criar, Ler, Atualizar, Deletar) e utiliza um banco de dados em memória.",
    tech: ["Java", "Spring Boot", "Maven", "API Rest", "H2 Database"],
    // liveLink: "https://github.com/greathiago/java-product-api/raw/main/public/product-api-demo.gif",
    repoLink: "https://github.com/greathiago/java-product-api",
  },
  {
    type: "demo",
    image:
      "https://placehold.co/600x400/e8f0fe/1a365d?text=Gerador+de+Citações",
    title: "Gerador de Citações com Python",
    description:
      "Uma API leve e rápida desenvolvida com Flask que retorna citações inspiradoras de forma aleatória. Um ótimo exemplo de microsserviço e manipulação de dados em Python.",
    tech: ["Python", "Flask", "API Rest", "JSON"],
    // liveLink: "https://github.com/greathiago/python-quote-api/raw/main/public/quote-api-demo.gif",
    repoLink: "https://github.com/greathiago/python-quote-api",
  },
  {
    type: "interactive",
    image: process.env.PUBLIC_URL + "/image1.png",
    title: "Plataforma Imobiliária Taise Silva",
    description:
      "Solução Full Stack desenvolvida para uma corretora de imóveis. O sistema oferece um catálogo dinâmico com filtros avançados, performance otimizada para SEO e um CMS headless (Sanity) para gestão autônoma de conteúdo pelo cliente.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    liveLink: "https://taisesilvaimoveis.com.br",
    repoLink: "https://github.com/greathiago/imoveis_ts",
  },
];

const App = () => {
  return (
    <div className={styles.container}>
      {/* ELEMENTOS DO FUNDO */}
      <div className={styles.spaceBackground}>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
            <span className={styles.logo}>Thiago Matos</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.link}>Sobre</a>
            <a href="#projects" className={styles.link}>Projetos</a>
            <a href="#skills" className={styles.link}>Habilidades</a>
            <a href="#contact" className={styles.cta}>Contato</a>
          </div>
        </div>
      </nav>

      <header className={styles.hero} id="top">
        <div className={styles.heroContent}>
          <img src={logo} alt="Logo Hero" className={styles.heroLogo} />
          <h1 className={styles.title}>Thiago Moreira de Matos</h1>
          <h2 className={styles.subtitle}>
            Desenvolvedor Front-end Especialista em React.<br />
            Transformando ideias complexas em experiências digitais de alta performance.
          </h2>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <AiOutlineCode size={24} />
              <span>5+ Anos de Experiência</span>
            </div>
            <div className={styles.statItem}>
              <FiSmartphone size={24} />
              <span>Foco em UX/UI</span>
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
            Com 5 anos de experiência, sou um desenvolvedor front-end focado em criar interfaces modernas, escaláveis e intuitivas. Minha especialidade é o ecossistema React, mas possuo sólidos conhecimentos em C#, Java e Python, o que me permite ter uma visão holística do desenvolvimento de software.
            <br /><br />
            Na <strong>Ene-soluções</strong> (Algar Telecom), liderei iniciativas técnicas que resultaram em uma <strong>redução de 50% no tempo de carregamento</strong> das aplicações críticas e na padronização de componentes de interface. Sou apaixonado por código limpo, performance e por entregar valor real ao negócio.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <h4>Ene-soluções (Algar Telecom)</h4>
              <span className={styles.timelineDate}>2019 - 2024</span>
              <ul className={styles.timelineList}>
                <li>Otimização de performance (+50% de ganho em speed index).</li>
                <li>Arquitetura e desenvolvimento de componentes reutilizáveis.</li>
                <li>Liderança técnica e mentoring de desenvolvedores júnior.</li>
              </ul>
            </div>
            <div className={styles.highlightCard}>
              <h4>Sankhya - Jiva (Estágio)</h4>
              <span className={styles.timelineDate}>2018 - 2019</span>
              <ul className={styles.timelineList}>
                <li>Desenvolvimento de módulos de automação em Java.</li>
                <li>Otimização de processos internos e redução de tarefas manuais.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Habilidades Técnicas</h3>
          <div className={styles.skillsGrid}>
            {[
              "React", "JavaScript", "TypeScript", "Node.js", "CSS3",
              "Git", "Python", "HTML5", "Sass", "Redux", "C#", "Java"
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
          <h3 className={styles.footerTitle}>Vamos Conversar?</h3>
          <p className={styles.footerText}>
            Estou disponível para novos desafios e oportunidades. Entre em contato para discutirmos como posso agregar valor ao seu time.
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:thiago10.000@hotmail.com" className={styles.contactLink}>
              thiago10.000@hotmail.com
            </a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/greathiago" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <AiFillGithub size={32} />
              </a>
               <a href="https://www.linkedin.com/in/thiago-moreira-687976171" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
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