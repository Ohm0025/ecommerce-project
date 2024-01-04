import { useNavigate } from "react-router-dom";

const getPathArr = (
  currentPath: string,
  query?: string | undefined,
  cat?: string | undefined,
  brand?: string | undefined
): string[] => {
  const allPath = ["Home", "Products", "Checkout"];
  const indexCurrent = allPath.findIndex((item) => item === currentPath);
  const finalArr = allPath.slice(0, indexCurrent + 1);
  //console.log(finalArr);
  if (finalArr.length > 1) {
    if (brand) {
      finalArr.splice(2, 0, brand);
    }
    if (cat) {
      finalArr.splice(2, 0, cat);
    }
    if (query) {
      finalArr.splice(2, 0, query);
    }
    //console.log(finalArr);
  }
  return finalArr;
};

type GetOnClickType = () => void;

const getOnClick = (pathTitle: string, subpath?: string): GetOnClickType => {
  const navigate = useNavigate();
  let distination = "";
  switch (pathTitle) {
    case "Home":
      distination = "home";
      break;
    case "Cart":
      distination = "cart";
      break;
    case "Products":
      distination = "products";
      break;
    case "Checkout":
      distination = "checkout";
      break;
    case "Cat":
      distination = `category/${subpath}`;
      break;
    case "Brand":
      distination = `products/${subpath}`;
      break;
  }
  return () => navigate(`/${distination}`);
};

export { getPathArr, getOnClick };
