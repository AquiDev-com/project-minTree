import styles from "./styles.module.scss";
const ProjectCard = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.iconContainer}></div>
        <div className={styles.infoContainer}></div>
        <div className={styles.qrCodeContainer}>
          <button>Gerar QRCODE</button>
          <div className={styles.qrCode}></div>
          <button>Baixar QRCODE</button>
          <button>Copiar link do QRCODE</button>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
