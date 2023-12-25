import { useEffect } from "react";
import { searchProduct } from "../../services/searchProduct";
import { useProductListStore } from "../../store/productList";
import Spinner from "../spinner/Spinner";

type Props = {};

const Catalogue = (props: Props) => {
  const { productList, fetchProductList, setFetchProductList, setProductList } =
    useProductListStore();

  const callData = () => {
    let randomStart = Math.floor(
      Math.random() * (fetchProductList.data.length - 11)
    );
    const spliceList = fetchProductList.data.slice(
      randomStart,
      randomStart + 10
    );
    setProductList({
      data: spliceList,
      loading: false,
      error: null,
    });
  };

  useEffect(() => {
    callData();
  }, [fetchProductList]);

  return (
    <>
      {productList.loading ? (
        <Spinner color="black" />
      ) : (
        <div className="grid grid-cols-5 gap-4 w-[80%] mt-[50px] mx-[auto]">
          {productList.data.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center gap-3 w-[100px] h-[140px] mx-[auto]">
                <img
                  src={item.image}
                  alt=""
                  className="w-[100px] aspect-square"
                />
                <span>
                  {"$ "}
                  {item.price}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Catalogue;
