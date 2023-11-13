import styles from "./styles.module.scss";

const InputColor = ({ label, id, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} type="color" value={value} onChange={onChange} />
    </div>
  );
};

export default InputColor;
