import React from "react";
import { useDetailPage } from "./DetailPage.hook";
import Spinner from "../../component/spinner/Spinner";
import StarRating from "../../component/starRating/StarRating";
import ProductCounter from "../../component/productCounter/ProductCounter";
import OrderButton from "../../component/orderButton/OrderButton";
import ProductSlide from "../../component/productSlide/ProductSlide";

type Props = {};

const DetailPage = (props: Props) => {
  const { productDetail, loading, changeLoading } = useDetailPage();

  return (
    <>
      {loading ? (
        <Spinner color="black" />
      ) : (
        <div className="min-h-[100vh] bg-gray-200">
          <div className="w-full h-[60vh] m-[auto] bg-white border-b-2">
            {/* <div className="p-4 flex flex-col items-center justify-center">
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
            </div> */}
            <ProductSlide
              slides={[
                productDetail.image,
                productDetail.image,
                productDetail.image,
              ]}
            />
          </div>

          <div className="w-full bg-white px-8 py-2">
            <div className="flex items-center py-1">
              <StarRating rate={productDetail.rating} />
            </div>
            <div className="py-1">{productDetail.title}</div>
            <div className="py-1">{"$ " + productDetail.price}</div>
            <OrderButton
              styleEdit={{ minWidth: "50%", maxWidth: "400px", margin: "auto" }}
            />
          </div>
          <div className="w-full bg-white px-8 py-2 mb-2">
            <p>{productDetail.description}</p>
            <span className="text-[#1c77fd] text-sm">Read more</span>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
