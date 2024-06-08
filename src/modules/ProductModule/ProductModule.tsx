import React, { FC } from "react";
import { ProductType } from "../../hooks/useProduct";
import ProductLoading from "../../components/ProductLoading/ProductLoading";
import Product from "../../components/Product/Product";

interface ProductModuleProps {
  isLoading: boolean;
  products: ProductType[];
}
const ProductModule: FC<ProductModuleProps> = ({ isLoading, products }) => {
  if (isLoading) {
    return (
      <>
        {new Array(10).fill(1).map((item, index) => (
          <ProductLoading key={index + item} />
        ))}
      </>
    );
  }
  return (
    <>
      {products?.map((product) => (
        <Product
          key={product.id}
          {...product}
        />
      ))}
    </>
  );
};

export default ProductModule;
