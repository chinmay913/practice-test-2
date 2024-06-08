import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

export interface ProductType {
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
  id: number;
}

export type ProductSort =
  | "price-asc"
  | "price-desc"
  | "review-desc"
  | "review-asc"
  | "name-asc"
  | "name-desc";
const initialState: {
  products: ProductType[];
  sort: ProductSort;
  filter: string;
  showItems: number;
} = {
  products: [],
  sort: "price-asc",
  filter: "",
  showItems: 8,
};

const sortProductByPrice = (products: ProductType[], sort: ProductSort) => {
  if (sort === "price-desc") {
    return [...products.sort((a, b) => b.price - a.price)];
  }
  if (sort === "name-asc") {
    return [...products.sort((a, b) => a.title.localeCompare(b.title))];
  }
  if (sort === "name-desc") {
    return [...products.sort((a, b) => b.title.localeCompare(a.title))];
  }
  if (sort === "review-asc") {
    return [...products.sort((a, b) => a.rating.rate - b.rating.rate)];
  }
  if (sort === "review-desc") {
    return [...products.sort((a, b) => b.rating.rate - a.rating.rate)];
  }
  return [...products.sort((a, b) => a.price - b.price)];
};

// Actions
type SET_PRODUCT = { type: "SET_PRODUCT"; payload: ProductType[] };
type SET_SORT = { type: "SET_SORT"; payload: ProductSort };
type FILTER_VALUE = { type: "FILTER_VALUE"; payload: string };
type LOAD_MORE = { type: "LOAD_MORE" };
type AppActions = SET_PRODUCT | SET_SORT | FILTER_VALUE | LOAD_MORE;

const reducer = (state: typeof initialState, action: AppActions) => {
  switch (action.type) {
    case "SET_PRODUCT": {
      return {
        ...state,
        products: sortProductByPrice(
          action.payload as ProductType[],
          state.sort
        ),
      };
    }
    case "SET_SORT": {
      return {
        ...state,
        sort: action.payload,
        products: sortProductByPrice(
          state.products as ProductType[],
          action.payload
        ),
      };
    }
    case "FILTER_VALUE": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "LOAD_MORE": {
      const newLoad = state.showItems + 8;
      return {
        ...state,
        showItems: newLoad,
      };
    }
  }
};

export const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data: ProductType[] = await res.json();
        dispatch({
          type: "SET_PRODUCT",
          payload: data,
        });
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };
    fetchProduct();
  }, []);

  const setSort = useCallback((sort: ProductSort) => {
    dispatch({ type: "SET_SORT", payload: sort });
  }, []);

  const setFilterValue = useCallback((filter: string) => {
    dispatch({ type: "FILTER_VALUE", payload: filter });
  }, []);
  const loadMore = useCallback(() => {
    dispatch({ type: "LOAD_MORE" });
  }, []);

  const filterProduct = useMemo(() => {
    if (state.filter.length > 0) {
      return [
        ...state.products.filter((product) =>
          product.title.toLowerCase().includes(state.filter)
        ),
      ];
    }
    return state.products;
  }, [state.filter, state.products]);

  return {
    ...state,
    isLoading,
    isError,
    setSort,
    filterProduct,
    setFilterValue,
    loadMore,
  };
};
