import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { OrComponent } from "../..";
import Social from "../../Social";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LoginFormSchema from "./login.form.schema";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginFormSchema) });

  const { userLogin } = useContext(UserContext);

  const submit = (payload) => {
    userLogin(payload);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
        <FormHeader
          title="Faça o login em sua conta"
          text="Insira seu e-mail e senha. "
        />
        <div className={styles.divContainer}>
          <Input
            label="E-mail:"
            placeholder="Adicione seu e-mail"
            type="email"
            id="email"
            error={errors.email}
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            label="Senha:"
            placeholder="Adicione sua senha"
            type="password"
            id="password"
            error={errors.password}
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <Link to="/recuperar-email">
            <span>Esqueceu sua senha?</span>
          </Link>
        </div>
        <Button text="Entrar" styleType="primary" type="submit" />

        <OrComponent />

        <Social />
      </form>
    </>
  );
};
export default FormLogin;
