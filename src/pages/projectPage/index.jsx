import { Header } from "../../components";
import { FormProject } from "../../components/forms";
import styles from "./styles.module.scss";

const ProjectPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header showButton={true} />

        <main>
          <FormProject />
        </main>
      </div>
    </>
  );
};
export default ProjectPage;
