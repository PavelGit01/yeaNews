import { useLocation } from "react-router-dom";
import { LoginForm, useLogin } from "@/feautures/auth";
import styles from "./styles.module.css";

const Login = () => {
  const location = useLocation();

  const { login } = useLogin();

  const from = location.state?.from?.pathname || "/";

  return (
    <section className={styles.section}>
      <h3>Для продолжения введите логин и пароль.</h3>
      <LoginForm
        onSubmit={(loginValue, password) => login(loginValue, password, from)}
      />
    </section>
  );
};

export default Login;
