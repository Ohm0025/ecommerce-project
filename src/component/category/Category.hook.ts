import { useEffect, useState } from "react";
import { productCategory } from "../../services/ProductCategory";

const useCategory = () => {
  const [listCat, setListCat] = useState<string[]>([]);
  const callData = async () => {
    const res = await productCategory.getAllCategory();
    if (res.status === 200 && res.data) {
      setListCat([...res.data]);
    }
  };
  useEffect(() => {
    callData();
  }, []);
  return { listCat };
};

export default useCategory;
