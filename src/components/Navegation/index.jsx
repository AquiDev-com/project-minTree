import { Link } from "react-router-dom";
import { BsFillGearFill, BsFillHouseDoorFill } from "react-icons/bs";
import styles from "./styles.module.scss";

const Navegation = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <nav>
          <Link to="/home">
            <button>
              <BsFillHouseDoorFill /> Ínicio
            </button>
          </Link>
          <Link to="/projetos">
            <button>
              <BsFillGearFill /> Projetos
            </button>
          </Link>
          <Link to="/projetos">
            <button>
              <BsFillGearFill /> Projetos
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Navegation;
