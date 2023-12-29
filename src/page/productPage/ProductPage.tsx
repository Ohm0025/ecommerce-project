import React, { useEffect } from "react";
import { useProductListStore } from "../../store/productList";
import { useParams, useSearchParams } from "react-router-dom";
import Spinner from "../../component/spinner/Spinner";
import ProductCard from "../../component/productCard/ProductCard";
import FilterBox from "../../component/filterBox/FilterBox";
import { useProductCategory } from "../../store/categoryAll";
import { Pagination } from "@mui/material";
import "./ProductPage.css";

type Props = {};

const ProductPage = (props: Props) => {
  const { productList, setProductList, fetchProductList } =
    useProductListStore();
  const { currentCat, setCurrentCat } = useProductCategory();

  const [queryStr, setQueryStr] = useSearchParams();
  let title = queryStr.get("title") || "";
  let type = queryStr.get("type") || "";

  const { cat } = useParams();
  console.log(cat);
  useEffect(() => {
    setProductList({ data: [], loading: true, error: null });
    if (title && title.trim() !== "") {
      const filterList = fetchProductList.data.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      setProductList({ data: filterList, loading: false, error: null });
    } else {
      setProductList({
        data: [...fetchProductList.data],
        loading: false,
        error: null,
      });
    }
    // if(type){
    //   const filterList =
    // }
  }, [fetchProductList, title]);

  return (
    <>
      {productList.loading || fetchProductList.loading ? (
        <div className="flex flex-col items-center min-h-[100vh]">
          <Spinner color="black" />
        </div>
      ) : (
        <div className="min-h-[100vh] grid grid-cols-1 gap-1 mb-4">
          <FilterBox />
          {productList.data.length > 0 ? (
            productList.data.map((item) => {
              if (currentCat.length === 0 || !currentCat) {
                return <ProductCard productDetail={item} />;
              } else {
                if (currentCat.includes(item.category)) {
                  return <ProductCard productDetail={item} />;
                }
              }
            })
          ) : (
            <h1>emty</h1>
          )}
          <Pagination
            count={4}
            className="pagination-product-page"
            sx={{ margin: "10px auto" }}
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
