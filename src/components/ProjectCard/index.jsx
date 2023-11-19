import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { api } from "./../../services/api";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { CgLink } from "react-icons/cg";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  const listProject = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.get("/project", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Erro ao listar projetos:", error);
    }
  };

  useEffect(() => {
    listProject();
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={styles.cardContainer}>
          <div className={styles.iconBack}>
            <div className={styles.funcButtons}>
              <button className={styles.edit}>
                <BiEdit />
              </button>
              <button className={styles.link}>
                <Link to="/link">
                  <CgLink />
                </Link>
              </button>
            </div>
            <div className={styles.iconContainer}>
              <img src={project.image} alt={project.slug} />
            </div>
          </div>
          <div className={styles.infoBack}>
            <div className={styles.infoContainer}>
              <h2>{project.title}</h2>
              <p>
                {project.bio.length > 20
                  ? `${project.bio.substring(0, 30)}...`
                  : project.bio}
              </p>
              <div className={styles.buttonsContainer}>
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///8AAAClpaVhYWHc3Nzj4+NUVFRZWVldXV27u7uhoaHu7u7Z2dne3t6np6eOjo74+PhmZmatra0kJCQ/Pz+BgYFra2vFxcVgYGC1fd0VAAAJmUlEQVR4nO2d6XYaSwyEbcOwhcUQJ7nv/6T3JKPmuJSaQmq8gKP6h5np1ge4Ny3z8FAqlUqlUlTbzVNSa2zgW7yBzTfR9WZL7Vtnzfurnc1jVkv3ESVu3aquN5RwmbbPt/OUbmGGDcwTt85V10+UcJa2z7dThH+rCIW+PuHwiYTr3fyihjzh2OxubS8Xs99aHRThYfX6mkY4XDav9TJBuKMfoFOe0Jrd4V9XinAF1zTCiHk7STin91xNOKfXzBThDHtJEM6LsAiLkImPNNbCnhL2jzQhwuctGYa3bUsQITz+mRBmL+MrN1uYFn/G/uEAtyxtz8JnC3v1jdr3nCDkG4W2Wo8Q2l9PtCEu+cUgId8JbROE/CfX7kkQZpZKCULeLBpfhEVYhF+QcKDmZo5/bpZwnLhmC2ruOHEN9uaCbX7cfGha4B7yUwlX9Fpqn/vaTXvawJy28CmEfPedIJTmFmERFmGEcEGvxdbbWJogdG6HW58PB3rNgpp7oh/DDRDKNU3HHr8Ii7AIvzxhxzmNO0ezv9pYamdtbiztJ7z+nIY65c+ecSQED/v+JxKCj35/QIv6CWnUQQsPePPzUvOw28Fm2yjgHXz/0U8o9eaEM2outa8Ii7AIi/C3BnrP1YR8h8X3FlcTDpIwoRAh3z3hS1wqtZduS/mZ0SaSkK/a+PIKLeMe0iIswiIEOQ87J7RlqvPjS8I9JeQr2wzhejnLyXvYHeEAPgnnxzfCYfHacd8ID8NrV4fzjsS1dDHMV4gTSvF1Bb2UH7F+rIqwCM8qwk/T1yfEJXKIkCeNfAwhTjvemd6YYD403/xACQ/Mc98C0JwgVk3Oh+e5Di0JyS0d1M9pRd9zhPtM5yC5psFlELdEtxshDLk7+XY2YQlfl8rT91C7RViE90PI0y/G90Ijzc0TjrueNn1Z7PG46Vn9wInAzRYY0owzShPGWmMvfrZQhDSYbItpnFOEJntzAy+dO83N+Ngsj8VwPjzXS5yQi2dqakK0Xrs7abMdAZv9hBP/IEVYhLdPyFOmKaFzyi/zhNz1zwnRsCsIMe39ZCkvJ+I1PzvlD/s/r9eUcHS4t3ZCrn9OGM/Hb4bFpuLIb4OnvNpLPvRL1z8nRPFfimnC99RPyNOWpbmRY/J+wgn/YREWYRHeKuERemvRu0iIY+kJ+0Zz28qbH8/Zmzj8HvOEtqCfWHnzkAKn8dLh8oUXPkg5rB8jzcInFVPIETleGioTIQnlz0la8nY74CIswiK8bcLd5QsvnOrLsfSdCV9OsHtyUpupn+Neqk2L48sWn4zB1Xqb00FoOywdopCIYnHnpfaFtC8Nr7WTQh4g/2aEtilb0vY6CPmRhFzZ6SSHqwllhlwRFuH9EB7jhG69ayMN5tU0YTaLE084lIUSefaObRsmRpoxru34nRJikFp7addYIZnRUXP2h6DTBSvHuDC3FwsaAEuWv6CuWnPUDOh1QWvHN3e/lrP/SFyb3KraK5kPE3GmN0JecggtcY49HueN1j5Aszr6khNmTnslIf+3xF5kprMk1LH6RViEd0PYho1VgLBjpJGE+/cltKqU5qMffqz+Hsdn6Da3a0KzxRgBcA4mc4Q4J2FdNTlbmEGxambWdxvHeVybM8ysH1/JGd9J7qET+bqul1SmcyRMUgbey3YihJGca21JERZhEd4OoUwUlIR4BsNHOU4oPR9ywyX97RNHeBZN9gNLky1ong2d68aJy82HbnIboD0XGdd4x8Bpv+FqEOMG6Wk003azNh/u0PiJo1qZQNURaIgLFGeuWwbZX/GINRNzwyOlnUJnBwnxf29nGRJiL9dHFRVhEd4d4VuPNFcTRmLfXDbrhLU4W+isTFaIuR29WaR020yMG662XbLZwp/omWzn9vT6kO33wdnrW3C2sFnHZbNOEOKMr0W/4AW0o4sfuFNZFH4/S7xF/po0Yb4uhpOML+WmRAgz/2NFWIT3Tohlx/oJQyONzUnchdJPqNelWB/MeTXG987VzDYQBY2mWDsuqIzHMK/pLRlCVtTsQhQ0/3StXTSbl5fjcq4y/KW4r70/Vh/r3ulVW8d6ShLKlLhMwKYk1Hv8IizCIrwZQr4mpoS87HGIENf3cix1gdMmHo8dOk10nxwnVOZKwha0HSl+HTnIdPHYoRPhDsLIQo+H6chVW6h2BiAVYREW4c0T4ljKz9u51yUylrrYVhnqulfNUsLmCddeblldWe6eMIf04YHd4uKTebjyeEtLKbVmURhc3TZcFlx9oRY0aoefChXPA25yX3tEj3HJAPkQofaQ4jWmyDJIK0HYn+TgrS/CIrxdQu3Hx2tMLhXyfQl54LRpIsMSq3uiH38hrzF9PxLvzYQLhZcmo9XMuF5mrFmTiyhoelINRq4xPalmXcgjv8UUysDCZrU+hLD/AFsqltlVhEX47xC6FSM+2zDmcH8nQlULms8WpuZhN2Gxyxb15YKrbSZwE4wJq5l9P5I+Z5j56QgnZot+ydIAJv7cNV4vIVJTAR8V7Qh1TYUORX5OoWgTU6YuBr0mVRejCIuwCO+DMFLwhY+lb0XoxtsJwv5nI7DSmnw+9BuuGeva4tp4Leg2MyOhzZku2UifCEcU2rPw5zUjoevaLHOnxjzHDJU5844otFaSzWYIeZ5gERZhEQZ0Ui0cE4SLAGEo/7DjuWsmngr5SJvlAb+SkFqLn1RTKLOrgzCSptUkQ0fyhKk84CIswiL8soRuLMVTfVc8iz93DYXLXed+njinQcLMM50jhNQpLwugtUJqL7R0WisffWLxAKPxG++hR8KO53JLQif+mO4O0S94QjIFy4T/MFcQyl4yKsIi9CrCsO6TUO4tnGQ1gYw+lNAU2RA2WS+nSAvD6661JiLO34owsql3hNKp2jSPE05szYuwCP8dwsgh970RUsd90wv4+nXZMQgUc+EBE4Tg5MdepqK+Ogil78lmAufr58d+2Iu7hRMiA96i94cZwkgpDZ7ZJQn5LZIwk8tdhEVYhJ9PmDmnkYR8LOVlx7AXnpQpCXFU12PpMytBM1GB2UwZZyE9HzahWx/nw9bLjN3insc50KdLO2s5oRYltJdyTcOViU2klqSioK8mzPshrydMxZcWYRHePmGiPo2L5Vl9HmFqpFlDvf6JUC4ktCcHHAKELqRZFqnsmC1MPTkzVB17fHfWlnlWUGTGN2nv2vsSZsIkO1ZtutkiLMLbJ9w8ZsWz6WU7MYf7KFc8axsnnGiW5uNL8Yd/yXZiDvdRWAANKwOc/0rvlM2WSqVSqcT0PzJvpMQtgb09AAAAAElFTkSuQmCC" />
                </div>
                <button>Baixar QRCODE</button>
                <button>Copiar link do QRCODE</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {projects.length === 0 && (
        <div className={styles.buttonContainer}>
          <Link to="/projeto">
            <button>
              <IoAddCircleSharp /> Criar um projeto
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
