import { useEffect, useState } from "react";
import { productCategory } from "../../services/ProductCategory";

type ArrCatImg = {
  productTitle: string;
  productImg: string;
};

const useCategory = () => {
  const [listCat, setListCat] = useState<string[]>([]);
  const [listImg, setListImg] = useState<ArrCatImg[]>([]);

  const callData = async () => {
    const res = await productCategory.getAllCategory();
    if (res.status === 200 && res.data) {
      let initList: ArrCatImg[] = [];
      setListCat([...res.data]);
      if (res.data.length > 0) {
        res.data.forEach(async (item) => {
          const imgCatSrc = await productCategory.getImgCategory(item);
          if (imgCatSrc.status === 200) {
            imgCatSrc.data?.products[0].images[0] &&
              initList.push({
                productTitle: item,
                productImg: imgCatSrc.data?.products[0].images[1],
              });
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
