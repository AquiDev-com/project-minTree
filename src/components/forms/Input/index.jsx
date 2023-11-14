import React from "react";
import styles from "./styles.module.scss";

const Input = React.forwardRef(({ label, id, type, placeholder, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
});

export default Input;
