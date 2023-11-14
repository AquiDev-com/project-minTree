import OrComponent from "../../OrComponent";
import Button from "../../Button";
import Social from "../../Social";
import FormHeader from "../FormHeader";
import Input from "../Input";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import RegisterFormSchema from "./register.form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RegisterFormSchema) });

  const { registerUser } = useContext(UserContext);

  const submit = (payload) => {
    console.log("payload", payload);
    console.log("name:", payload.name);
    console.log("email:", payload.email);
    console.log("password:", payload.password);
    registerUser(payload);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
        <FormHeader title="Faça seu cadastro" text="Crie sua conta" />
        <div className={styles.divContainer}>
          <Input
            label="Nome:"
            placeholder="Adicione seu nome"
            type="text"
            id="name"
            required
            error={errors.name}
            {...register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <Input
            label="E-mail:"
            placeholder="Adicione seu e-mail"
            type="email"
            id="email"
            required
            error={errors.email}
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}

          <Input
            label="Senha:"
            placeholder="Adicione sua senha"
            type="password"
            id="password"
            required
            error={errors.password}
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <Input
            placeholder="Digite novamente sua senha"
            id="c_password"
            label="Confirmar senha"
            type="password"
            error={errors.c_password}
            {...register("c_password")}
          />
          {errors.c_password ? <p>{errors.c_password.message}</p> : null}
        </div>
        <Button text="Registrar" styleType="primary" type="submit" />

        <OrComponent />

        <Social />
      </form>
    </>
  );
};
export default FormRegister;
