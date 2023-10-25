import { OrComponent } from "../..";
import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import {
  LiaFacebookSquare,
  LiaInstagram,
  LiaTwitterSquare,
} from "react-icons/lia";

const FormRegister = () => {
  return (
    <>
      <form className={styles.formContainer}>
        <FormHeader title="Faça seu cadastro" text="Crie sua conta" />
        <div className={styles.divContainer}>
          <Input
            label="Nome:"
            placeholder="Adicione seu nome"
            type="text"
            id="name"
            required
          />
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
        </div>
        <Button text="Registrar" styleType="primary" />

        <OrComponent />

        <div className={styles.socialContainer}>
          <LiaFacebookSquare />
          <LiaInstagram />
          <LiaTwitterSquare />
        </div>
      </form>
    </>
  );
};
export default FormRegister;
