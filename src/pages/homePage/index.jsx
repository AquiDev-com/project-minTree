import { Link } from "react-router-dom";
import { Button, Header, ProjectCard } from "../../components";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header showLogout={true} />
      <main>
        <div className={styles.buttonContainer}>
          <Link to="/projeto">
            <button>
              <IoAddCircleSharp /> Criar um projeto
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
