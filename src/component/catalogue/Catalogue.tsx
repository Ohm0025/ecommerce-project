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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full my-[10px] px-1">
          <div className="col-span-full font-semibold px-2">
            Sample Products
          </div>
          {productList.data.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center gap-3 w-full h-[200px] mx-[auto] bg-[white] p-2 rounded-md shadow">
                <img
                  src={item.thumbnail}
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
