import ProductLayout from "../../layout/ProductLayout/ProductLayout";
import { useProducts } from "../../hooks/useProduct";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductSort from "../../components/ProductSort/ProductSort";
import ProductModule from "../../modules/ProductModule/ProductModule";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const {
    filterProduct,
    setFilterValue,
    setSort,
    isLoading,
    showItems,
    loadMore,
  } = useProducts();

  return (
    <ProductLayout>
      <section className={styles["product-filter-section"]}>
        <ProductFilter onSearch={setFilterValue} />
      </section>
      <section className={styles["product-sort-section"]}>
        <ProductSort onSelect={setSort} />
      </section>
      <section className={styles["product-grid"]}>
        <ProductModule
          isLoading={isLoading}
          products={filterProduct.slice(0, showItems)}
        />
      </section>
      {showItems < 20 && (
        <button
          className={styles["product-load-more"]}
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </ProductLayout>
  );
};

export default ProductPage;
