import styles from "./styles.module.scss";

const SelectInput = ({ button, label, id, type, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{label}</label>
        {button}
      </div>
      <input name={id} id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default SelectInput;
