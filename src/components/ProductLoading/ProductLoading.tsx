import styles from "./ProductLoading.module.css";

const ProductLoading = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles["skeleton-image"]} ${styles["skeleton"]}`} />
      <div>
        <div className={`${styles["skeleton-text"]} ${styles["skeleton"]}`} />
        <div className={`${styles["skeleton-text"]} ${styles["skeleton"]}`} />
      </div>
      <div className={`${styles["skeleton-review"]} ${styles["skeleton"]}`} />
      <div className={`${styles["skeleton-price"]} ${styles["skeleton"]}`} />
    </div>
  );
};

export default ProductLoading;
