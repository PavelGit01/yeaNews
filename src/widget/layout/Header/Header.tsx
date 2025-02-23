import { NavBar } from "@/feautures/navigation";
import { Logo } from "@/shared/ui";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={`wrapper ${styles.container}`}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
