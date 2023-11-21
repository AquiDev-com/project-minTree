import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components";
import { FormProject } from "../../components/forms";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const ProjectEditPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  const listProject = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.get(`/project/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProject(response.data.data);
    } catch (error) {
      console.error("Erro ao listar projetos:", error);
    }
  };

  useEffect(() => {
    listProject();
  }, []);

  return (
    <>
      <div className={styles.pageContainer}>
        <Header showButton={true} />

        <main>
          {project && <FormProject editing={project} />}
          {!project && <p>Carregando...</p>}
        </main>
      </div>
    </>
  );
};
export default ProjectEditPage;
