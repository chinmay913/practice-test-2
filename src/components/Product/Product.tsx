import { FC } from "react";
import { ProductType } from "../../hooks/useProduct";
import styles from "./Product.module.css";

const Product: FC<ProductType> = ({ image, price, rating, title }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles["image"]}
        src={image}
        alt={title}
      />
      <p className={styles["title"]}>{title}</p>
      <p
        className={styles["rating"]}
      >{`⭐️ ${rating.rate} (${rating.count} reviews)`}</p>
      <p className={styles["price"]}>${price}</p>
    </div>
  );
};

export default Product;
