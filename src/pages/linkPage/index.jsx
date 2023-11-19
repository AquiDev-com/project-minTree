import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { api } from "./../../services/api";

const LinkPage = () => {
  const [projects, setProjects] = useState([]);

  const listProject = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.get("/project", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data.data);
    } catch (error) {
      console.error("Erro ao listar projetos:", error);
    }
  };

  useEffect(() => {
    listProject();
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={styles.cardContainer}>
          <div className={styles.iconBack}>
            <div className={styles.iconContainer}>
              <img src={project.image} alt={project.slug} />
            </div>
          </div>
          <div className={styles.infoBack}>
            <div className={styles.infoContainer}>
              <h2>{project.title}</h2>
              <p>{project.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinkPage;
