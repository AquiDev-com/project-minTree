import styles from "./styles.module.scss";

const Input = ({ id, type, placeholder, icon }) => {
  return (
    <div className={styles.inputContainer}>
      {icon && <div>{icon}</div>}
      <input name={id} id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
