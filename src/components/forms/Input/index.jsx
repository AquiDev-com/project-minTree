import styles from "./styles.module.scss";

const Input = ({ label, id, type, placeholder}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
