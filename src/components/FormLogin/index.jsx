import Button from "../Button";
import Input from "../Input";

const FormLogin = () => {
  return (
    <>
      <form>
        <Input
          label="E-mail"
          placeholder="Digite aqui seu e-mail"
          type="email"
          id="email"
          required
        />
        <Input
          label="senha"
          placeholder="Digite aqui sua senha"
          type="password"
          id="password"
          required
        />

        <Button text="Entrar" />
      </form>
    </>
  );
};
export default FormLogin;
