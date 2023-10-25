import { Link } from "react-router-dom";
import { BsFillGearFill, BsFillHouseDoorFill } from "react-icons/bs";

const Navegation = () => {
  return (
    <>
      <div>
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
        </nav>
      </div>
    </>
  );
};
export default Navegation;
