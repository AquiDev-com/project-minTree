import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const registerUser = async (payload) => {
    try {
      await api.post("/register", payload);

      localStorage.removeItem("@TOKEN");
      navigate("/");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      if (
        error.response?.data?.error_message ===
        "The email has already been taken."
      ) {
        toast.error("E-mail já cadastrado.");
      }
    }
  };

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post("/login", payload);

      console.log(data);
      localStorage.setItem("@TOKEN", data.data.token);

      navigate("/home");
      toast.success("Login bem-sucedido.");
    } catch (error) {
      if (
        error.response?.data?.error_message === "The selected email is invalid."
      ) {
        toast.error("Credenciais inválidas");
      }
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const loadUser = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      userLogout();
      return;
    }
    try {
      const { data } = await api.get(`/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      userLogout();
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ registerUser, userLogin, userLogout, loadUser, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
