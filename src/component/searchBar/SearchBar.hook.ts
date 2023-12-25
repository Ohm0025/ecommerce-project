import { useForm } from "react-hook-form";
import { useProductListStore } from "../../store/productList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../../services/searchProduct";

const useSearchBar = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [suggestArr, setSuggestArr] = useState<Array<string>>([]);

  const { setFetchProductList, setProductList, fetchProductList } =
    useProductListStore();

  const navigate = useNavigate();
  const keyword = watch("keyword");

  const listProducts = (title?: string) => {
    if (title || keyword) {
      navigate("/products?title=" + title || keyword);
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
    const responseList = await searchProduct.fetchAllProduct();
    if (responseList.status === 200) {
      console.log("FETCHING");
      const rawProductList = responseList.data;
      if (rawProductList) {
        setFetchProductList({
          data: rawProductList,
          loading: false,
          error: null,
        });
      }
    } else {
      console.log("fetchError");
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
  };
};

export { useSearchBar };
