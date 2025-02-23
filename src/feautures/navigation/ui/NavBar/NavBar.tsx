import CustomLink from "../CustomLink/CustomLink";
import styles from "./styles.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/news">News</CustomLink>
      <CustomLink to="/weather">Weather</CustomLink>
      <CustomLink to="/currency">Currency</CustomLink>
      <CustomLink to="/profile">Profile</CustomLink>
    </nav>
  );
};

export default NavBar;
