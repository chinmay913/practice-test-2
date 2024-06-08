import React, { FC } from "react";
import styles from "./ProductFilter.module.css";

interface ProductFilterProps {
  onSearch: (filter: string) => void;
}
const ProductFilter: FC<ProductFilterProps> = ({ onSearch }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const filter = data.get("filter") as string;
    onSearch(filter.toLowerCase());
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles["filter-form"]}
    >
      <input
        className={styles["filter-input"]}
        type='text'
        name='filter'
        placeholder='Search in ABC'
      />
      <button
        className={styles["filter-button"]}
        type='submit'
        title='Search'
      >
        Search
      </button>
    </form>
  );
};

export default ProductFilter;
