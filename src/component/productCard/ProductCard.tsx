import React, { useEffect } from "react";
import { IProductListItem } from "../../interface/productList";
import { formatProductTitle } from "../../utils/formatText";
import StarRating from "../starRating/StarRating";
import { useNavigate } from "react-router-dom";
import { discountCal } from "../../utils/priceCal";
import { addItemToCart } from "../../utils/addItemToCart";

type Props = {
  productDetail: IProductListItem;
};

const ProductCard = (props: Props) => {
  const navivate = useNavigate();

  useEffect(() => {
    const addBtn = document.querySelectorAll("[data-addToCart]");
    const cartBtn = document.getElementById("cartBtn");

    for (let btn of addBtn) {
      btn.addEventListener("click", (e) => addItemToCart(e, cartBtn));
    }
  }, []);

  return (
    <div className="w-[90%] items-center mx-auto my-2 h-[14em] min-h-[100px] grid grid-cols-3 grid-rows-1 gap-3 p-2 text-[12px] bg-white rounded shadow sm:max-w-[725px] sm:min-h-[150px] relative">
      <div className="col-span-1 flex items-center justify-center p-1">
        <img
          className="h-full w-auto max-h-[100px]"
          src={props.productDetail.images[0]}
          alt="product_image"
        />
      </div>
      <div className="col-span-2">
        <div className="text-[16px]">
          {formatProductTitle(props.productDetail.title, 30)}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[17px]">
            {"$ " +
              discountCal(
                props.productDetail.price,
                props.productDetail.discountPercentage
              )}
          </span>
          <span className="line-through text-sm text-gray-400">
            {"$ " + props.productDetail.price}
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <StarRating rate={props.productDetail.rating} />
          <span className="text-[14px]">
            {"in stock : " + props.productDetail.stock}
          </span>
        </div>
        <div className="flex overflow-hidden max-w-[400px] max-h-[40px]">
          {props.productDetail.description}
        </div>
        <div className="mt-[7px]">
          <button
            className="font-semibold text-[#0D6EFD]"
            onClick={() => navivate("/products/" + props.productDetail.id)}>
            View details
          </button>
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <button
          className="p-2 border rounded-md shadow-sm text-center"
          data-addtocart>
          <i className="fa-solid fa-cart-plus text-[20px] text-[#0D6EFD]"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
