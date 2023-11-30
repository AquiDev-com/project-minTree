import { OrComponent } from "../..";
import Button from "../../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const FormResetPassword = (to) => {
  return (
    <>
      <form className={styles.formContainer}>
        <div className={styles.divContainer}>
          <Input
            label="Nova senha:"
            placeholder="Adicione sua senha"
            type="password"
            id="newPassword"
            required
          />
          <Input
            label="Confirmar senha:"
            placeholder="Confirme sua senha"
            type="password"
            required
          />
        </div>
        <Button text="Redefinir" styleType="primary" />
        <OrComponent />
        <Link to={"/entrar"}>
          <Button styleType="primary" text="Voltar" />
        </Link>
      </form>
    </>
  );
};
export default FormResetPassword;
