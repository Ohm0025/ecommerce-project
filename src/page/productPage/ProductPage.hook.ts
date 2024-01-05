import { useEffect } from "react";
import { useProductListStore } from "../../store/productList";
import { useSearchParams, useParams } from "react-router-dom";
import { useLoading } from "../../store/loadingState";
import {
  getAllProduct,
  getProductByCat,
  searchProduct,
} from "../../services/product";
import { useLinkRef } from "../../store/linkRef";
import { IProductListItem } from "../../interface/productList";

const useProductPage = () => {
  const { setProductList, setFetchProductList, productList, fetchProductList } =
    useProductListStore();
  const { openIsLoading, closeIsLoading } = useLoading();
  const { cat, q } = useParams();
  const { category, query, brand } = useLinkRef();

  const callInitData = async () => {
    try {
      openIsLoading();
      setFetchProductList({ data: [], loading: true, error: null });
      setProductList({ data: [], loading: true, error: null });

      if (!category || category === "All category") {
        const response = await getAllProduct();
        setFetchProductList({
          data: [...response.data.products],
          loading: false,
          error: null,
        });
        if (query) {
          const searchResponse = await searchProduct(query);
          setProductList({
            data: [...searchResponse.data.products],
            loading: false,
            error: null,
          });
        } else {
          setProductList({
            data: [...response.data.products],
            loading: false,
            error: null,
          });
        }
      } else {
        const response = await getProductByCat(category);
        setFetchProductList({
          data: [...response.data.products],
          loading: false,
          error: null,
        });
        if (query) {
          setProductList({
            data: [
              ...response.data.products.filter((item: IProductListItem) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              ),
            ],
            loading: false,
            error: null,
          });
        } else {
          setProductList({
            data: [...response.data.products],
            loading: false,
            error: null,
          });
        }
      }
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callInitData();
  }, [category, cat, q]);
  return { productList, callInitData };
};

export default useProductPage;
