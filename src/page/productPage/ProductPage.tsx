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
import NavPage from "../../component/navPage/NavPage";
import useProductPage from "./ProductPage.hook";
import { useLinkRef } from "../../store/linkRef";

type Props = {};

const ProductPage = (props: Props) => {
  const { productList } = useProductPage();

  const { currentCat, setCurrentCat } = useProductCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const { brand } = useLinkRef();
  return (
    <>
      {productList.loading ? (
        <div className="flex flex-col items-center min-h-[100vh]">
          <Spinner color="black" />
        </div>
      ) : (
        <div className="flex flex-col min-h-[100vh] sm:grid sm:grid-cols-4 gap-1 mb-4 sm:w-[80%] sm:mx-auto">
          <FilterBox isProductPage={true} />
          {productList.data.length > 0 ? (
            <div className="min-h-[100vh] mt-1 col-span-4 sm:col-span-3">
              {productList.data
                .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
                .map((item, index) => {
                  if (currentCat.length === 0 || !currentCat) {
                    if (brand) {
                      if (brand === item.brand) {
                        return (
                          <ProductCard
                            productDetail={item}
                            key={`product-card-${index}`}
                          />
                        );
                      } else {
                        return;
                      }
                    }
                    return (
                      <ProductCard
                        productDetail={item}
                        key={`product-card-${index}`}
                      />
                    );
                  } else {
                    if (currentCat.includes(item.category)) {
                      return (
                        <ProductCard
                          productDetail={item}
                          key={`product-card-${index}`}
                        />
                      );
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
            className="pagination-product-page col-span-8"
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
