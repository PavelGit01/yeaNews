import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./styles.module.css";

interface Props {
  label: string;
  type?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}
const InputField = ({ label, type, register, error }: Props) => {
  return (
    <div>
      <label className={styles.label}>
        <p className={styles.textLabel}>{label}</p>
        <input type={type} {...register} className={styles.input} />
      </label>
      <div className={styles.error}>{error?.message}</div>
    </div>
  );
};

export default InputField;
