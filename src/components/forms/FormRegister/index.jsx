import Button from "../../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterFormSchema from "./register.form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { ImSpinner2 } from "react-icons/im";

const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RegisterFormSchema) });

  const { registerUser } = useContext(UserContext);

  const submit = (payload) => {
    setIsLoading(true);
    registerUser(payload, setIsLoading);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
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
        {!isLoading && (
          <Button text="Registrar" styleType="primary" type="submit" />
        )}
        {isLoading && <ImSpinner2 className="fa-spin" />}
      </form>
    </>
  );
};
export default FormRegister;
