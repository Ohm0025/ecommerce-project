import React, { useEffect } from "react";
import { useProductListStore } from "../../store/productList";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Spinner from "../../component/spinner/Spinner";

type Props = {};

const ProductPage = (props: Props) => {
  const { productList, setProductList, fetchProductList } =
    useProductListStore();

  const [queryStr, setQueryStr] = useSearchParams();
  let title = queryStr.get("title") || "";
  let type = queryStr.get("type") || "";

  useEffect(() => {
    setProductList({ data: [], loading: true, error: null });
    if (title && title.trim() !== "") {
      const filterList = fetchProductList.data.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      setProductList({ data: filterList, loading: false, error: null });
    } else {
      console.log("setRaw");
      setProductList({
        data: [...fetchProductList.data],
        loading: false,
        error: null,
      });
    }
    // if(type){
    //   const filterList =
    // }
  }, []);

  return (
    <>
      {productList.loading ? (
        <Spinner color="black" />
      ) : (
        <div>
          {productList.data.length > 0 ? (
            productList.data.map((item) => {
              return <div>{item.title}</div>;
            })
          ) : (
            <h1>emty</h1>
          )}
        </div>
      )}
    </>
  );
};

export default ProductPage;
