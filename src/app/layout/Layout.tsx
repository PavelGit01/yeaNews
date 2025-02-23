import { Footer, Header } from "@/widget/layout";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};
