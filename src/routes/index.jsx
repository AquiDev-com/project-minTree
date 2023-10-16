import { Route, Routes } from "react-router-dom";
import {
  ProjectPage,
  HomePage,
  LoginPage,
  PasswodResetPage,
  ProjectsPage,
  RegisterPage,
} from "../pages";

export default () => {
  return (
    <>
      <Routes>
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/recuperar-senha" element={<PasswodResetPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projeto" element={<ProjectPage />} />
      </Routes>
    </>
  );
};
