import { Route, Routes } from "react-router-dom";
import {
  LinkPage,
  ProjectPage,
  ProjectEditPage,
  LoginPage,
  PasswordResetPage,
  HomePage,
  RegisterPage,
  EmailResetPage,
} from "../pages";

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
        <Route path="/recuperar-email" element={<EmailResetPage />} />
        <Route path="/recuperar-senha" element={<PasswordResetPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/criar-projeto" element={<ProjectPage />} />
        <Route path="/projeto/:slug" element={<ProjectEditPage />} />
        <Route path="/page/:slug" element={<LinkPage />} />
      </Routes>
    </>
  );
};
