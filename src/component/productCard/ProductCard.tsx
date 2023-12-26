import React from "react";
import { IProductListItem } from "../../interface/productList";
import { formatProductTitle } from "../../utils/formatText";
import StarRating from "../starRating/StarRating";
import { Link } from "react-router-dom";

type Props = {
  productDetail: IProductListItem;
};

const ProductCard = (props: Props) => {
  return (
    <div className="w-[230px] h-[330px] p-2 text-[14px] bg-gray-400 shadow">
      <div className="h-[70%]">
        <Link to={`/products/${props.productDetail.id}`}>
          <img
            className="aspect-square w-[95%]"
            src={props.productDetail.image}
            alt="product_image"
          />
        </Link>
      </div>
      <div>{formatProductTitle(props.productDetail.title, 30)}</div>
      <div>{"$ " + props.productDetail.price}</div>
      <div className="flex justify-between">
        <StarRating rate={props.productDetail.rating.rate} />
        <span>{props.productDetail.rating.count}</span>
      </div>
    </div>
  );
};

export default ProductCard;
