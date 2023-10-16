import Button from "../Button";
import Input from "../Input";

const FormRegister = () => {
  return (
    <>
      <div>
        <form>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            id="name"
            required
          />
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

          <Button text="Cadastrar"/>
        </form>
      </div>
    </>
  );
};
export default FormRegister;
