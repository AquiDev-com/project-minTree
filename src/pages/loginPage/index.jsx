import { useState } from "react";
import { FormLogin, FormRegister } from "../../components";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleShowLoginForm = () => {
    setIsLoginFormVisible(true);
  };

  const handleShowRegisterForm = () => {
    setIsLoginFormVisible(false);
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <main>
          <div className={styles.toggleContainer}>
            <img src={logo} />
            <div className={styles.buttonsContainer}>
              <button onClick={handleShowLoginForm}>Fazer login</button>

              <button onClick={handleShowRegisterForm}>Criar conta</button>
            </div>
          </div>
          {isLoginFormVisible ? <FormLogin /> : <FormRegister />}
        </main>
      </div>
    </>
  );
};

export default LoginPage;
