import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { api } from "./../../services/api";
import { useParams } from "react-router-dom";
import { generateColorVariations } from '../../utils/colorUtils';

const LinkPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState([]);
  const [colorVariations, setColorVariations] = useState([]);

  const listProject = async () => {
    try {
      const response = await api.get(`/project/${slug}`);

      setProject(response.data.data);

      setColorVariations(generateColorVariations(response.data.data.primary_color, 'primary'));
    } catch (error) {
      console.error("Erro ao listar projetos:", error);
    }
  };

  useEffect(() => {
    listProject();
  }, []);

  return (
    <>
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
    </>
  );
};

export default LinkPage;
