import Input from "../Input";
import styles from "./styles.module.scss";
import { IoAddCircleSharp } from "react-icons/io5";

const FormProject = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.divContainer}>
        <Input
          label="Foto"
          placeholder="URL da foto"
          type="text"
          id="photo"
          required
        />
      </div>
      <div className={styles.divContainer}>
        <Input
          label="Nome"
          placeholder="Nome do projeto"
          type="text"
          id="name"
          required
        />
      </div>
      <div className={styles.divContainer}>
        <Input
          label="Bio"
          placeholder="Descrição do projeto"
          type="text"
          id="bio"
          required
        />
      </div>
      <div className={styles.divText}>
        <h2>Adicione mais opções</h2>
        <p>Clique no botão para adicionar mais opções</p>
      </div>
      <div className={styles.divContainer}>
        <Input
          label="Instagram"
          placeholder="Nome de usuário do Instagram"
          type="text"
          id="instagram"
          required
        />
      </div>
      <div>
        <button>
          <IoAddCircleSharp /> Adicionar opção
        </button>
      </div>
    </form>
  );
};

export default FormProject;
