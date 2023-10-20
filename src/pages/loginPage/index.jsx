import { Header, FormLogin, Section } from "../../components";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header></Header>
        <main>
          <FormLogin />
          <Section
            title="Nova conta?"
            paragraph="Crie sua conta e aproveite
            tudo que temos a oferecer!"
            text="Registrar-se"
            to="/registrar"
          />
        </main>
      </div>
    </>
  );
};
export default LoginPage;
