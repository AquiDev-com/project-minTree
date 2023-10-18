import styles from "./styles.module.scss";

const Button = ({ text, styleType }) => {
  const buttonStyles = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
  };

  return <button className={buttonStyles[styleType]}>{text}</button>;
};

export default Button;
