import { Link } from "react-router-dom";
import { Button, Header, ProjectCard } from "../../components";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main>
        {/* FAZER CONDICIONAL QUE VERIFICA SE JA TEM UM PROJETO CRIADO, SE TIVER RENDERIZA O PROJETO 
        SE NAO TIVER MOSTRA O BOTAO DE CRIAR UM PROJETO */}
        {/* <div className={styles.buttonContainer}> */}
        {/* <Link to="/projeto"> */}
        {/* <button> */}
        {/* <IoAddCircleSharp /> Criar um projeto */}
        {/* </buttok> */}
        {/* </Link> */}
        {/* // </div> */}

        <div>
          <ProjectCard />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
