import { FormResetPassword, Header } from "../../components/index";
import styles from "./styles.module.scss";

const PasswordResetPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header></Header>
        <main>
          <FormResetPassword />
        </main>
      </div>
    </>
  );
};
export default PasswordResetPage;
