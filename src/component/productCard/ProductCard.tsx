import React from "react";
import { IProductListItem } from "../../interface/productList";
import { formatProductTitle } from "../../utils/formatText";
import StarRating from "../starRating/StarRating";
import { useNavigate } from "react-router-dom";

type Props = {
  productDetail: IProductListItem;
};

const ProductCard = (props: Props) => {
  const navivate = useNavigate();
  return (
    <div
      onClick={() => navivate("/products/" + props.productDetail.id)}
      className="w-[90%] m-auto h-[100px] grid grid-cols-3 grid-rows-1 gap-3 p-2 text-[12px] bg-white rounded shadow sm:max-w-[445px]">
      <div className="col-span-1 flex items-center justify-center p-1">
        <img
          className="h-full w-auto"
          src={props.productDetail.image}
          alt="product_image"
        />
      </div>
      <div className="col-span-2">
        <div>{formatProductTitle(props.productDetail.title, 30)}</div>
        <div>{"$ " + props.productDetail.price}</div>
        <div className="flex justify-between">
          <StarRating rate={props.productDetail.rating.rate} />
          <span>{props.productDetail.rating.count}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
