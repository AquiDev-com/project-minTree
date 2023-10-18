import { FormRegister, Header, Section } from "../../components";
import styles from "./styles.module.scss";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <main>
          <FormRegister />
          <Section
            title="Já possui uma conta?"
            paragraph="Entre agora mesmo e aproveite tudo que temos a oferecer!"
            text="Entrar"
            to="/entrar"
          />
        </main>
      </div>
    </>
  );
};
export default RegisterPage;
