import { FormResetEmail, Header } from "../../components";
import styles from "./styles.module.scss";

const EmailResetPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header></Header>
        <main>
          <FormResetEmail />
        </main>
      </div>
    </>
  );
};
export default EmailResetPage;
