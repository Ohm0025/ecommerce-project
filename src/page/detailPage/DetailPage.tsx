import React from "react";
import { useDetailPage } from "./DetailPage.hook";
import Spinner from "../../component/spinner/Spinner";
import StarRating from "../../component/starRating/StarRating";
import ProductCounter from "../../component/productCounter/ProductCounter";
import OrderButton from "../../component/orderButton/OrderButton";

type Props = {};

const DetailPage = (props: Props) => {
  const { productDetail, loading, changeLoading } = useDetailPage();
  console.log(productDetail.image);
  return (
    <>
      {loading ? (
        <Spinner color="black" />
      ) : (
        <div className="min-h-[100vh] bg-gray-200">
          <div className="w-[70%] h-[45vh] max-h-[500px] m-[auto] grid grid-cols-3 bg-white mt-[30px]">
            <div className="p-4 flex flex-col items-center justify-center">
              <img
                src={productDetail.image}
                alt=""
                className="h-[80%] aspect-auto"
              />
            </div>
            <div className="col-span-2 p-4 flex flex-col">
              <span>{productDetail.title}</span>
              <div className="grid grid-cols-2">
                <StarRating rate={productDetail.rating?.rate} />
                <span>{productDetail.rating?.count}</span>
              </div>
              <span>{"$ " + productDetail.price}</span>
              <ProductCounter btnWidth="230px" btnSize="40px" />
              <OrderButton />
            </div>
          </div>

          <div className="w-[70%] m-[auto] bg-white mt-[30px] p-5">
            <div className="flex flex-col mb-4">
              <span className="bg-gray-200 p-2">หมวดหมู่</span>
              <span className="pl-6">{productDetail.category}</span>
            </div>
            <div className="flex flex-col">
              <span className="bg-gray-200 p-2">รายละเอียดสินค้า</span>
              <span className="pl-6">{productDetail.description}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
