import { Header, FormLogin, Banner } from "../../components";
import Navegation from "../../components/Navegation";
import { FormProject } from "../../components/forms";
import styles from "./styles.module.scss";

const ProjectPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <Navegation />
        <main>
          <FormProject />
        </main>
      </div>
    </>
  );
};
export default ProjectPage;
