import { useAuth } from "@/app/provider/context/authProvider";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { handleAuth } = useAuth();

  const navigate = useNavigate();

  const login = (login: string, password: string, from: string = "/") => {
    if (login === "admin" && password === "12345") {
      handleAuth(true);

      navigate(from, { replace: true });
    } else {
      alert("Неверный логин или пароль.");
    }
  };

  return { login };
};
