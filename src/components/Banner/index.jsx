import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./styles.module.scss";

const Banner = ({ title, paragraph, text, to }) => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        {title && <h2>{title}</h2>}
        {paragraph && <p>{paragraph}</p>}
      </div>
      <Link to={to}>
        <Button styleType="secondary" text={text} />
      </Link>
    </section>
  );
};

export default Banner;
