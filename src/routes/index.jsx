import { Route, Routes } from "react-router-dom";
import {
  LinkPage,
  ProjectPage,
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
        <Route path="/projeto" element={<ProjectPage />} />
        <Route path="/link" element={<LinkPage />} />
      </Routes>
    </>
  );
};
