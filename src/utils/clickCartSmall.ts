type InputProductType = {
  productId: number;
  productTitle: string;
  productPrice: number;
  productQTY: number;
  productDiscount: number;
  productImg: string;
};

const handleOnClickCartSmall = ({
  productId,
  productTitle,
  productPrice,
  productQTY,
  productDiscount,
  productImg,
}: InputProductType) => {
  const oldCart = localStorage.getItem("user-cart");

  const newCartItem = {
    productId,
    productTitle,
    productPrice,
    productQTY,
    productDiscount,
    productImg,
  };

  if (oldCart) {
    const convertOldCart = JSON.parse(oldCart);
    let addCart = [...convertOldCart, newCartItem];
    localStorage.setItem("user-cart", JSON.stringify(addCart));
  } else {
    let newEmptyCart = [newCartItem];
    localStorage.setItem("user-cart", JSON.stringify(newEmptyCart));
  }
};

export { handleOnClickCartSmall };
export type { InputProductType };
