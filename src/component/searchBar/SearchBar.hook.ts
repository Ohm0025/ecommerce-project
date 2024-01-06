import { useForm } from "react-hook-form";
import { useProductListStore } from "../../store/productList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLinkRef } from "../../store/linkRef";
import { productCategory } from "../../services/ProductCategory";
import { useProductCategory } from "../../store/categoryAll";
import useProductPage from "../../page/productPage/ProductPage.hook";

const useSearchBar = () => {
  const {
    register,

    setValue,
    watch,
    formState: {},
  } = useForm();

  const [suggestArr, setSuggestArr] = useState<Array<string>>([]);

  const { productTotal, fetchProductList } = useProductListStore();

  const { callInitData } = useProductPage();
  const { query, category } = useLinkRef();
  const { setProductCategory, productCategories } = useProductCategory();

  const navigate = useNavigate();
  const keyword = watch("keyword");

  const listProducts = () => {
    if (query) {
      navigate("/ecommerce-project/products/search/" + query);
    } else if (category && category !== "All category") {
      navigate("/ecommerce-project/products/category/" + category);
    } else {
      navigate("/ecommerce-project/products");
    }
    callInitData();
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

  // const callData = async () => {
  //   setFetchProductList({ data: [], loading: true, error: null });
  //   const responseList = await getAllProduct();
  //   if (responseList?.status === 200) {
  //     const rawTotal = responseList.data.total;
  //     const rawProductList = responseList.data.products;
  //     if (rawProductList) {
  //       setFetchProductList({
  //         data: rawProductList,
  //         loading: false,
  //         error: null,
  //       });
  //     }
  //     if (rawTotal) {
  //       setProductTotal(rawTotal);
  //     } else {
  //       setProductTotal(0);
  //     }
  //   } else {
  //     setFetchProductList({
  //       data: [],
  //       loading: false,
  //       error: responseList.error,
  //     });
  //   }
  // };

  const callCat = async () => {
    if (productCategories.data.length === 0) {
      const res = await productCategory.getAllCategory();
      if (res.status === 200) {
        res.data &&
          setProductCategory({ data: res.data, loading: false, error: null });
      }
    }
  };

  useEffect(() => {
    callCat();
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
