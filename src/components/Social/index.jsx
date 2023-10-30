import styles from "./styles.module.scss";
import {
    LiaFacebookSquare,
    LiaInstagram,
    LiaTwitterSquare,
} from "react-icons/lia";

const Social = () => {
    return <div className={styles.socialContainer}>
        <LiaFacebookSquare />
        <LiaInstagram />
        <LiaTwitterSquare />
    </div>;
};

export default Social;
