import { Link } from "react-router-dom";
import { Header, Navegation } from "../../components";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Navegation />
      <main>
        <div>
          <Link to="/projeto">
            <button>
              <IoAddCircleSharp /> Criar um novo projeto
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
