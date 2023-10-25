import { Banner, FormRegister, Header } from "../../components";
import styles from "./styles.module.scss";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <main>
          <FormRegister />
          <Banner
            title="Já possui uma conta?"
            paragraph="Entre agora mesmo e aproveite tudo que temos a oferecer!"
            text="Entrar"
            to="/"
          />
        </main>
      </div>
    </>
  );
};
export default RegisterPage;
