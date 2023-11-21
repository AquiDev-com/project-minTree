import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const registerUser = async (payload, setIsLoading = null) => {
    try {
      const { data } = await api.post("/register", payload);

      localStorage.setItem("@TOKEN", data.data.token);
      navigate("/home");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      if (setIsLoading) {
        setIsLoading(false);
      }

      if (
        error.response?.data?.error_message ===
        "The email has already been taken."
      ) {
        toast.error("E-mail já cadastrado.");
      }
    }
  };

  const userLogin = async (payload, setIsLoading = null) => {
    try {
      const { data } = await api.post("/login", payload);

      localStorage.setItem("@TOKEN", data.data.token);

      navigate("/home");
      toast.success("Login bem-sucedido.");
    } catch (error) {
      if (setIsLoading) {
        setIsLoading(false);
      }

      if (
        error.response?.data?.error_message === "The selected email is invalid."
      ) {
        toast.error("Credenciais inválidas");
      } else {
        toast.error(
          "Ocorreu um erro ao fazer login. Verifique suas credencias."
        );
      }
    }
  };
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");

    const currentPath = window.location.pathname;
    const protectedRoutes = ["/home", "/criar-projeto", "/projeto/:slug"];
    const isProtectedRoute = protectedRoutes.some((route) =>
      currentPath.includes(route)
    );

    if (isProtectedRoute) {
      window.location.href = "/";
    }
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
      if (error.response && error.response.status === 401) {
        const currentPath = window.location.pathname;
        if (!currentPath.includes("/page/")) {
          userLogout();
        }
      }
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
