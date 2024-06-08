import { FC, PropsWithChildren } from "react";
import styles from "./ProductLayout.module.css";

const ProductLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["app"]}>
      <header className={styles["header"]}>
        <h1>Welcome to ABC</h1>
      </header>
      <main className={styles["main"]}>{children}</main>
      <footer className={styles["footer"]}>
        copywrite MIT | created by Chinmay Girolkar
      </footer>
    </div>
  );
};

export default ProductLayout;
