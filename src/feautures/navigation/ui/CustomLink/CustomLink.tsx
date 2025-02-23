import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  to: string;
}

const CustomLink = ({ children, to }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? styles.isActive : styles.notActive
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
