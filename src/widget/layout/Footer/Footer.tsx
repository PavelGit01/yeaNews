import { NavBar } from "@/feautures/navigation";
import { Logo } from "@/shared/ui";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={`wrapper ${styles.footer}`}>
      <div>
        <Logo />
        <p className={styles.copirightText}>&copy;2025 YeaNews</p>
      </div>
      <NavBar />
    </div>
  );
};

export default Footer;
