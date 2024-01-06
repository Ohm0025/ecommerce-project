import React from "react";
import { useDetailPage } from "./DetailPage.hook";
import Spinner from "../../component/spinner/Spinner";
import StarRating from "../../component/starRating/StarRating";
import ProductCounter from "../../component/productCounter/ProductCounter";
import OrderButton from "../../component/orderButton/OrderButton";
import ProductSlide from "../../component/productSlide/ProductSlide";
import { discountCal } from "../../utils/priceCal";

type Props = {};

const DetailPage = (props: Props) => {
  const { productDetail, loading, changeLoading } = useDetailPage();

  return (
    <div>
      {loading ? (
        <Spinner color="black" />
      ) : (
        <div className="min-h-[100vh]">
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:w-[80%] sm:mx-auto bg-gray-200">
            <div className="w-full h-[60vh] m-[auto] bg-white border-b-2">
              <ProductSlide slides={productDetail.images} />
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full bg-white px-8 py-2 sm:grid sm:grid-rows-4 sm:h-[300px] sm:items-center">
                <div className="flex items-center py-1 sm:order-2">
                  <StarRating rate={productDetail.rating} />
                </div>
                <div className="py-1 sm:order-1 sm:text-[2rem]">
                  {productDetail.title}
                </div>
                <div className="py-1 sm:text-[1.5rem] sm:order-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px]">
                      {"$ " +
                        discountCal(
                          +productDetail.price,
                          productDetail.discountPercentage
                        )}
                    </span>
                    <span className="line-through text-sm text-gray-400">
                      {"$ " + productDetail.price}
                    </span>
                  </div>
                </div>
                <div className="sm:order-4">
                  <OrderButton
                    styleEdit={{
                      minWidth: "50%",
                      maxWidth: "400px",
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
              <div className="w-full bg-white px-8 py-2 mb-2">
                <p>{productDetail.description}</p>
                <span className="text-[#1c77fd] text-sm">Read more</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
