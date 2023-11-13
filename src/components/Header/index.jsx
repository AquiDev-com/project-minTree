import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BsArrowReturnLeft } from "react-icons/bs";

const Header = ({ showButton }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <h1>Waka Waka</h1>
        {showButton && (
          <Link to={"/home"}>
            <button>
              <BsArrowReturnLeft />
            </button>
          </Link>
        )}
      </header>
    </>
  );
};
export default Header;
