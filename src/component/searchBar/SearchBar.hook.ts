import { useForm } from "react-hook-form";
import { useProductListStore } from "../../store/productList";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { searchProduct } from "../../services/searchProduct";
import { getAllProduct } from "../../services/product";

const useSearchBar = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const location = useLocation();

  const [suggestArr, setSuggestArr] = useState<Array<string>>([]);

  const {
    setFetchProductList,
    setProductList,
    productTotal,
    setProductTotal,
    fetchProductList,
  } = useProductListStore();

  const navigate = useNavigate();
  const keyword = watch("keyword");

  const listProducts = (title?: string) => {
    if (title || keyword) {
      navigate("/products?title=" + (title || keyword));
    } else {
      navigate("/products");
    }
  };

  useEffect(() => {
    if (keyword && keyword.trim() !== "") {
      const filterList = fetchProductList.data.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setSuggestArr([...filterList.map((item) => item.title)]);
    } else {
      setSuggestArr([]);
    }
  }, [keyword]);

  const callData = async () => {
    setFetchProductList({ data: [], loading: true, error: null });
    const responseList = await getAllProduct();
    if (responseList?.status === 200) {
      const rawTotal = responseList.data.total;
      const rawProductList = responseList.data.products;
      if (rawProductList) {
        setFetchProductList({
          data: rawProductList,
          loading: false,
          error: null,
        });
      }
      if (rawTotal) {
        setProductTotal(rawTotal);
      } else {
        setProductTotal(0);
      }
    } else {
      setFetchProductList({
        data: [],
        loading: false,
        error: responseList.error,
      });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return {
    fieldKeyword: register("keyword"),
    changeKeyword: (value: string) => setValue("keyword", value),
    suggestArr,
    listProducts,
    keyword,
    productTotal,
  };
};

export { useSearchBar };
