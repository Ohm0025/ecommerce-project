import { useEffect } from "react";
import { useProductListStore } from "../../store/productList";
import { useSearchParams, useParams } from "react-router-dom";
import { useLoading } from "../../store/loadingState";
import { getAllProduct, getProductByCat } from "../../services/product";

const useProductPage = () => {
  const { setProductList, setFetchProductList, productList, fetchProductList } =
    useProductListStore();
  const { openIsLoading, closeIsLoading } = useLoading();
  const { cat } = useParams();

  const callInitData = async () => {
    try {
      openIsLoading();
      setFetchProductList({ data: [], loading: true, error: null });
      setProductList({ data: [], loading: true, error: null });
      if (cat) {
        const response = await getProductByCat(cat);
        console.log(response);
        if (response.status === 200) {
          setFetchProductList({
            data: [...response.data.products],
            loading: false,
            error: null,
          });
          if (response.data.products) {
            setProductList({
              data: [...response.data.products],
              loading: false,
              error: null,
            });
          }
        }
      } else {
        const response = await getAllProduct();
      }
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callInitData();
  }, [cat]);
  return { productList };
};

export default useProductPage;

//   const handleClickCat = async (selectedCat: string) => {
//     openIsLoading();
//     try {
//       const response = await getProductByCat(selectedCat);
//       console.log(response);
//     } finally {
//       closeIsLoading();
//     }
//   };
