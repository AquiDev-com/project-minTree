import { Header, ProjectCard } from "../../components";
import styles from "./styles.module.scss";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header showLogout={true} />
      <main>
        <ProjectCard />
      </main>
    </div>
  );
};

export default ProjectsPage;
