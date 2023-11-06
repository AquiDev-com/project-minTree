import styles from "./styles.module.scss";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

const Social = () => {
  return (
    <div className={styles.socialContainer}>
      <button>
        <AiFillFacebook />
        Entrar com facebook
      </button>
      <button>
        <AiFillGoogleSquare />
        Entrar com google
      </button>
    </div>
  );
};

export default Social;
