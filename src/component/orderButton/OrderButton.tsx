import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserCart } from "../../store/currentCart";
import { useDetailPage } from "../../page/detailPage/DetailPage.hook";
import { addItemToCart } from "../../utils/addItemToCart";

type Props = {
  styleEdit: object;
};

const OrderButton = (props: Props) => {
  const navigate = useNavigate();
  const { addUserCart } = useUserCart();
  const { productDetail } = useDetailPage();
  const addProductToCart = (e: any) => {
    const cartBtn = document.getElementById("cartBtn");
    const addBtnCart = document.getElementById("addBtnCart");
    cartBtn && addItemToCart(e, cartBtn);
    addBtnCart?.classList.add("addBtn");
    setTimeout(() => {
      addBtnCart?.classList.remove("addBtn");
    }, 750);
  };

  return (
    <div className="flex gap-2" style={props.styleEdit}>
      <button
        className="px-3 py-1 bg-[#3d8bfd] text-white rounded-lg flex-grow"
        onClick={() => {
          addUserCart({
            productId: +productDetail.id,
            productTitle: productDetail.title,
            productPrice: +productDetail.price,
            productQTY: 1,
            productDiscount: productDetail.discountPercentage,
            productImg: productDetail.images[0],
            productBrand: productDetail.brand,
            productRate: +(productDetail.rating || 0),
          });
          navigate("/checkout");
        }}>
        ซื้อสินค้าทันที
      </button>
      <button
        onClick={(e) => {
          addProductToCart(e);
          addUserCart({
            productId: +productDetail.id,
            productTitle: productDetail.title,
            productPrice: +productDetail.price,
            productQTY: 1,
            productDiscount: productDetail.discountPercentage,
            productImg: productDetail.images[0],
            productBrand: productDetail.brand,
            productRate: +(productDetail.rating || 0),
          });
        }}
        className="p-2 bg-[white] border text-[20px] border-gray-200 text-[#3d8bfd] text-center rounded-lg flex-shrink"
        data-addtocart>
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default OrderButton;
