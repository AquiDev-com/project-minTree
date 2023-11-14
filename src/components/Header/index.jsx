import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const Header = ({ showButton, showLogout }) => {
  const { userLogout } = useContext(UserContext);

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

        {showLogout && (
          <button onClick={userLogout}>
            <BsArrowReturnLeft />
          </button>
        )}
      </header>
    </>
  );
};
export default Header;
