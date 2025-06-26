// src/components/ProjectCard.js
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { AiFillGithub, AiOutlineExpand, AiOutlineClose } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // A "miniatura" será a imagem/gif do projeto.
  const renderThumbnail = () => (
    <div className={styles.thumbnailContainer}>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className={styles.cardImage}
      />
      <div className={styles.overlay} onClick={() => setIsModalOpen(true)}>
        <AiOutlineExpand size={40} className={styles.expandIcon} />
        <span>Ver Demo</span>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.card}>
        {renderThumbnail()}
        <div className={styles.cardContent}>
          <h4 className={styles.cardTitle}>{project.title}</h4>
          <p className={styles.cardDescription}>{project.description}</p>
          <div className={styles.cardTech}>
            {project.tech.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.cardLinks}>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <AiFillGithub /> Código Fonte
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            {project.type === "interactive" ? (
              <iframe
                src={project.liveLink}
                title={project.title}
                className={styles.modalFrame}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.image}
                alt={`${project.title} demo`}
                className={styles.modalImage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
