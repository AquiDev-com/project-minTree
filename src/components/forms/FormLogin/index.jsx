import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const FormLogin = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <FormHeader
          title="Faça o  login em sua conta"
          text="Insira seu e-mail e senha. "
        />

        <Input
          placeholder="Email"
          type="email"
          id="email"
          icon={<MdEmail className={styles.emailIcon} />}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          id="password"
          icon={<RiLockPasswordFill className={styles.emailIcon} />}
          required
        />
        <Button text="Entrar" styleType="primary" />
      </form>
    </>
  );
};
export default FormLogin;
