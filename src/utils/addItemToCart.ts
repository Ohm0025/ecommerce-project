const speed = 500,
  curveDelay = 300,
  position = "fixed";

export const addItemToCart = (e: any, cart: HTMLElement, {}: number = 1) => {
  let btnY =
    position === "fixed"
      ? e.currentTarget?.getBoundingClientRect().top
      : e.currentTarget?.offsetTop;
  let btnX =
    position === "fixed"
      ? e.currentTarget.getBoundingClientRect().right
      : e.currentTarget.offsetRight;
  let flyingBtn = e.currentTarget.cloneNode();

  cart?.classList.remove("addedCount");

  flyingBtn.classList.add("flyingBtn");

  flyingBtn.style.position = position;
  flyingBtn.style.top = `${btnY}px`;
  flyingBtn.style.left = `${btnX - 25}px`;
  flyingBtn.style.opacity = "1";
  flyingBtn.style.backgroundColor = "#3d8bfd";

  flyingBtn.style.transition = `all ${speed / 1000}s ease, top ${
    (speed + curveDelay) / 1000
  }s ease, left ${speed / 1000}s ease, transform ${speed / 1000}s ease ${
    (speed - 10) / 1000
  }s`;

  document.body.appendChild(flyingBtn);
  console.dir(cart.offsetParent);
  if (cart) {
    // flyingBtn.style.top = `${cart.offsetTop + cart.offsetHeight - 16}px`;
    // flyingBtn.style.right = `${cart.offsetLeft + cart.offsetWidth - 16}px`;
    flyingBtn.style.top = `${cart.offsetTop + cart.offsetHeight - 10}px`;
    flyingBtn.style.left = `${
      cart.offsetParent?.offsetLeft + cart.offsetWidth + cart.offsetLeft - 16
    }px`;
  }

  flyingBtn.style.height = "1rem";
  flyingBtn.style.width = "1rem";
  flyingBtn.style.transform = "scale(0)";

  setTimeout(() => {
    flyingBtn.remove();
    // storeItems();
  }, speed * 1.5);
};

// function storeItems(cart: HTMLElement, qty: number | null) {
//   let currentCart = localStorage.getItem("user-cart");
//   let cartList = JSON.parse(currentCart || "[]");
//   const { userCart } = useUserCart();

//   if (cart) {
//     let itmsInCart = cart.getAttribute("data-count");
//     cart.classList.add("addedCount");
//     cart.setAttribute("data-count", String(userCart.length));
//     // if (!itmsInCart) {
//     //   cart.setAttribute("data-count", String(qty));
//     // } else {
//     //   cart.setAttribute("data-count", String(cartList.length));
//     // }
//   }
// }
