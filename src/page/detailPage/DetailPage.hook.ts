import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchProduct } from "../../services/searchProduct";
import { IProductDetail } from "../../interface/productList";

const initDetail: IProductDetail = {
  id: "",
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
  images: [],
  stock: 0,
};

export const useDetailPage = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] =
    useState<IProductDetail>(initDetail);
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);
    const res = productId && (await searchProduct.getDetailProduct(+productId));
    if (res && res.status === 200) {
      const detailData = res.data;
      detailData && setProductDetail({ ...detailData });
      setLoading(false);
    } else {
      setProductDetail(initDetail);
      setLoading(false);
    }
  };

  useEffect(() => {
    callData();
  }, [productId]);

  return {
    productDetail,
    loading,
    changeLoading: (value: boolean) => setLoading(value),
  };
};
