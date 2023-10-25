import { Route, Routes } from "react-router-dom";
import {
  ProjectPage,
  HomePage,
  LoginPage,
  PasswordResetPage,
  ProjectsPage,
  RegisterPage,
  EmailResetPage,
} from "../pages";

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recuperar-email" element={<EmailResetPage/>} />
        <Route path="/recuperar-senha" element={<PasswordResetPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projeto" element={<ProjectPage />} />

      </Routes>
    </>
  );
};
