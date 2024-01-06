import { useEffect } from "react";
import { useProductListStore } from "../../store/productList";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const { productList, fetchProductList, setProductList } =
    useProductListStore();

  const callData = () => {
    let randomStart = Math.floor(
      Math.random() * (fetchProductList.data.length - 21)
    );
    const spliceList = fetchProductList.data.slice(
      randomStart,
      randomStart + 20
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full my-[10px] mt-[30px] px-1">
          <div className="col-span-full font-semibold px-2">
            Sample Products
          </div>
          {productList.data.map((item, index) => {
            return (
              <Link
                to={"/products/detail/" + item.id}
                key={`sample-product-img-${index}`}
                className="grid grid-rows-5 w-full max-w-[250px] gap-[1.25rem] h-[300px] bg-[white] py-4 px-2 rounded-md shadow">
                <img
                  src={
                    item.images[0] ||
                    item.images[item.images.length - 1] ||
                    item.thumbnail
                  }
                  alt=""
                  className="h-full w-auto mx-auto row-span-3"
                />
                <div className="flex flex-col row-span-2 px-4 justify-center gap-2">
                  <span>{"$ " + item.price}</span>
                  <span className="text-gray-400 text-sm">{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Catalogue;
