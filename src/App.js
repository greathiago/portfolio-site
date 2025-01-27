import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto Thiago"
            className="profile-photo"
          />
          <div>
            <h1>Thiago Moreira de Matos</h1>
            <p className="subtitle">
              Desenvolvedor Front-End | React, JavaScript, Node.js
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>Sobre Mim</h2>
        <p>
          Sou desenvolvedor web com 5 anos de experiência em tecnologias como
          React, JavaScript e Node.js, além de conhecimentos em C#, Java e
          Python. Tenho como objetivo criar soluções visuais impactantes e
          eficientes, sempre buscando inovação e qualidade.
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experiência Profissional</h2>
        <div className="card">
          <h3>Ene-Soluções</h3>
          <p>Desenvolvedor Front-End (2019 - 2024)</p>
          <ul>
            <li>
              Otimização do site Algar Telecom, reduzindo carregamento em 50%.
            </li>
            <li>
              Criação de 50+ componentes reutilizáveis para acelerar entregas.
            </li>
            <li>
              Correção de 200+ bugs críticos, garantindo estabilidade do site.
            </li>
            <li>Colaboração com equipes de design em campanhas de sucesso.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Sankhya - Jiva</h3>
          <p>Estagiário (2018 - 2019)</p>
          <ul>
            <li>
              Desenvolvimento de módulos de automação em Java para sistemas de
              RH.
            </li>
            <li>
              Melhoria de integrações, reduzindo tempos de adaptação em 10%.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Habilidades Técnicas</h2>
        <ul className="skills-list">
          <li>HTML & CSS</li>
          <li>JavaScript & React</li>
          <li>Node.js</li>
          <li>C#, Python, Java</li>
          <li>Git</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contato</h2>
        <p>
          Email:{" "}
          <a href="mailto:thiago10.000@hotmail.com">thiago10.000@hotmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/greathiago">github.com/greathiago</a>
        </p>
        <p>Telefone: +55 (34) 99124-0649</p>
      </section>
    </div>
  );
}

export default App;
