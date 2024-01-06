import { useEffect } from "react";
import { useProductCategory } from "../../store/categoryAll";
import { productCategory } from "../../services/ProductCategory";

const useFilterBox = () => {
  const { productCategories, setProductCategory, setCurrentCat } =
    useProductCategory();

  const callData = async () => {
    setProductCategory({ data: [], loading: true, error: null });
    const res = await productCategory.getAllCategory();
    if (res.status === 200) {
      const listCat = res.data;
      listCat &&
        setProductCategory({ data: listCat, loading: false, error: null });
    } else {
      setProductCategory({ data: [], loading: false, error: res.error });
    }
  };
  useEffect(() => {
    callData();
  }, []);

  return { setCurrentCat, productCategories };
};

export default useFilterBox;
