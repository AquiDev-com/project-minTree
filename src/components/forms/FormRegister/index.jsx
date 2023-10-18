import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const FormRegister = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <FormHeader title="Faça seu cadastro" />
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
        <Button text="Cadastrar" styleType="primary" />
      </form>
    </>
  );
};
export default FormRegister;
