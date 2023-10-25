import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";

const FormResetEmail = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <FormHeader title="Redefina sua senha" text="Insira seu e-mail" />
        <div className={styles.divContainer}>
          <Input
            label="E-mail:"
            placeholder="Adicione seu e-mail"
            type="email"
            id="emailRecover"
            required
          />
          <Button text="Enviar" styleType="primary" />
        </div>
      </form>
    </>
  );
};
export default FormResetEmail;
