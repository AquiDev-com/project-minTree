import styles from "./styles.module.scss";

const FormHeader = ({ title, text }) => {
  return (
    <div className={styles.headerContainer}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default FormHeader;
