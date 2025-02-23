import { useAuth } from "@/app/provider/context/authProvider";
import styles from "./styles.module.css";

const LogoutButton = () => {
  const { handleAuth } = useAuth();

  return <button className={styles.logoutButt} onClick={() => handleAuth(false)}>Logout</button>;
};

export default LogoutButton;
