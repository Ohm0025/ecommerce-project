import { useUserCart } from "../../store/currentCart";
import { useNavigate } from "react-router-dom";
import { useLinkRef } from "../../store/linkRef";

type Props = {};

const ListCartButton = ({}: Props) => {
  const { clearUserCart } = useUserCart();
  const { category } = useLinkRef();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-5">
      <button
        className="bg-[#0D6EFD] text-sm text-white px-3 py-1 rounded-md"
        onClick={() =>
          navigate(`/ecommerce-project/products/${category && category}`)
        }>
        <span className="mr-3">
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <span>Back to shop</span>
      </button>
      <button
        className="text-sm text-[#0D6EFD] border border-gray-200 px-3 py-1 rounded-md"
        onClick={() => clearUserCart()}>
        <span>Remove all</span>
      </button>
    </div>
  );
};

export default ListCartButton;
