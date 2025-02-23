import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isAuth: boolean;
  handleAuth: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean>(
    () => !!localStorage.getItem("auth")
  );

  const handleAuth = (value: boolean) => {
    if (value) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
    setIsAuth(value);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
