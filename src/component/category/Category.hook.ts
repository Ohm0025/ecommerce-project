import { useEffect, useState } from "react";
import { productCategory } from "../../services/ProductCategory";

const useCategory = () => {
  const [listCat, setListCat] = useState<string[]>([]);
  const [listImg, setListImg] = useState<string[]>([]);

  const callData = async () => {
    const res = await productCategory.getAllCategory();
    if (res.status === 200 && res.data) {
      let initList: string[] = [];
      setListCat([...res.data]);
      if (res.data.length > 0) {
        res.data.forEach(async (item) => {
          const imgCatSrc = await productCategory.getImgCategory(item);
          if (imgCatSrc.status === 200) {
            imgCatSrc.data?.products[0].images[0] &&
              initList.push(imgCatSrc.data?.products[0].images[0]);
            setListImg([...initList]);
          }
        });
      }
    }
  };

  useEffect(() => {
    callData();
  }, []);
  return { listCat, listImg };
};

export default useCategory;
