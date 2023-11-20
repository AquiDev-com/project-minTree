import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { api } from "./../../services/api";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { CgLink } from "react-icons/cg";
import { toast } from "react-toastify";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listProject();
  }, []);

  const listProject = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.get("/project", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data.data);
      console.log('project', response.data.data);
    } catch (error) {
      console.error("Erro ao listar projetos:", error);
    }
  };

  const handleQRCodeDownload = async (qrcodeUrl) => {
    window.open(qrcodeUrl, '_blank');
  };

  const handleQRCodeUrlCopy = (projectUrl) => {
    navigator.clipboard.writeText(projectUrl)
    .then(() => {
      toast.success('O link do QRCode foi copiado com sucesso');
    });
  };

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={styles.cardContainer}>
          <div className={styles.iconBack}>
            <div className={styles.funcButtons}>
              <button className={styles.edit}>
                <BiEdit />
              </button>
              <button className={styles.link}>
                <Link to={project.url}>
                  <CgLink />
                </Link>
              </button>
            </div>
            <div className={styles.iconContainer}>
              <img src={project.image} alt={project.slug} />
            </div>
          </div>
          <div className={styles.infoBack}>
            <div className={styles.infoContainer}>
              <h2>{project.title}</h2>
              <p>
                {project.bio.length > 20
                  ? `${project.bio.substring(0, 30)}...`
                  : project.bio}
              </p>
              <div className={styles.buttonsContainer}>
                <div>
                  <img src={project.qrcode} />
                </div>
                <button onClick={() => handleQRCodeDownload(project.qrcode)}>Baixar QRCode</button>
                <button onClick={() => handleQRCodeUrlCopy(project.url)}>Copiar link do QRCode</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {projects.length === 0 && (
        <div className={styles.buttonContainer}>
          <Link to="/projeto">
            <button>
              <IoAddCircleSharp /> Criar um projeto
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
