import React, { FC } from "react";
import { ProductSort as ProductSortType } from "../../hooks/useProduct";
import styles from "./ProductSort.module.css";

interface ProductSortProps {
  onSelect: (text: ProductSortType) => void;
}

const ProductSort: FC<ProductSortProps> = ({ onSelect }) => {
  return (
    <>
      <label className={styles["sort-label"]}>{`Sort by: `}</label>
      <select
        className={styles["sort-options"]}
        onChange={(e) => {
          const value = e.target.value;
          console.log("App ~ value:", value);
          onSelect(e.target.value as ProductSortType);
        }}
      >
        <option
          value={"price-asc"}
          selected
        >
          Price: Low to High
        </option>
        <option value={"price-desc"}>Price: High to Low</option>
        <option value={"review-desc"}>Reviews: High to Low</option>
        <option value={"review-asc"}>Reviews: Low to High</option>
        <option value={"name-asc"}>Name: A to Z</option>
        <option value={"name-desc"}>Name: Z to A</option>
      </select>
    </>
  );
};

export default ProductSort;
