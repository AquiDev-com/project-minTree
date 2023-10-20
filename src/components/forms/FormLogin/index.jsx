import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import { LiaFacebookSquare, LiaInstagram, LiaTwitterSquare } from "react-icons/lia";

const FormLogin = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <FormHeader
          title="Faça o  login em sua conta"
          text="Insira seu e-mail e senha. "
        />
        <div className={styles.divContainer}>
          <Input
            label="E-mail:"
            placeholder="Adicione seu e-mail"
            type="email"
            id="email"
            required
          />
          <Input
            label="Senha:"
            placeholder="Adicione sua senha"
            type="password"
            id="password"
            required
          />
          <span>Esqueceu sua senha?</span>
        </div>
        <Button text="Entrar" styleType="primary" />

        <div className={styles.orContainer}>
          <div className={styles.line}></div>
          <div className={styles.or}>OU</div>
          <div className={styles.line}></div>
        </div>

        <div className={styles.socialContainer}>
          <LiaFacebookSquare />
          <LiaInstagram />
          <LiaTwitterSquare/>
        </div>
      </form>
    </>
  );
};
export default FormLogin;