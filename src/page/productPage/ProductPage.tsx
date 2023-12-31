import React, { useEffect, useState } from "react";
import { useProductListStore } from "../../store/productList";
import { useParams, useSearchParams } from "react-router-dom";
import Spinner from "../../component/spinner/Spinner";
import ProductCard from "../../component/productCard/ProductCard";
import FilterBox from "../../component/filterBox/FilterBox";
import { useProductCategory } from "../../store/categoryAll";
import { Pagination } from "@mui/material";
import "./ProductPage.css";
import EmptyFound from "../../component/emptyFound/EmptyFound";

type Props = {};

const ProductPage = (props: Props) => {
  const { productList, setProductList, fetchProductList } =
    useProductListStore();
  const { currentCat, setCurrentCat } = useProductCategory();
  const [currentPage, setCurrentPage] = useState(1);

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
        <div className="min-h-[100vh] grid grid-cols-1 sm:grid-cols-4 gap-1 mb-4 sm:w-[80%] sm:mx-auto">
          <FilterBox />

          {productList.data.length > 0 ? (
            <div className="min-h-[100vh] mt-1 col-span-3">
              {productList.data
                .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
                .map((item) => {
                  if (currentCat.length === 0 || !currentCat) {
                    return <ProductCard productDetail={item} />;
                  } else {
                    if (currentCat.includes(item.category)) {
                      return <ProductCard productDetail={item} />;
                    }
                  }
                })}
            </div>
          ) : (
            <EmptyFound setHeight="100vh" text="ไม่พบรายการที่ค้นหา" />
          )}
          <Pagination
            page={currentPage}
            count={Math.ceil(productList.data.length / 10)}
            className="pagination-product-page sm:col-span-full"
            sx={{ margin: "10px auto" }}
            onChange={(event: React.ChangeEvent<unknown>, value: number) =>
              setCurrentPage(value)
            }
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
