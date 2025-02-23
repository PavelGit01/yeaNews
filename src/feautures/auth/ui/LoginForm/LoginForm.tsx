import { SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "@/shared/ui";
import styles from "./styles.module.css";

interface MyForm {
  login: string;
  password: string;
}

interface Props {
  onSubmit: (login: string, password: string) => void;
}
const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<MyForm>({ mode: "onBlur" });

  const submit: SubmitHandler<MyForm> = (data) => {
    onSubmit(data.login, data.password);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <InputField
        label="Login:"
        type="text"
        error={errors?.login}
        register={register("login", {
          required: "Поле обязательно к заполнению.",
          minLength: {
            value: 3,
            message: "Минимум 3 символа.",
          },
        })}
      />
      <InputField
        label="Password:"
        type="password"
        error={errors?.password}
        register={register("password", {
          required: "Поле обязательно к заполнению.",
          minLength: {
            value: 5,
            message: "Минимум 5 символов.",
          },
        })}
      />
      <input
        className={styles.submit}
        disabled={!isValid}
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
