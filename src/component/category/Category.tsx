import useCategory from "./Category.hook";
import { useNavigate } from "react-router-dom";
import CarouzelCat from "./CarouzelCat";
import { useLinkRef } from "../../store/linkRef";

const category: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = () => {
  const { listCat = category, listImg } = useCategory();
  const { setCategory } = useLinkRef();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full mt-[17px] bg-[white] shadow-md rounded-md">
      <div className="p-1">Categorys</div>
      <CarouzelCat
        listCat={listCat}
        listImg={listImg}
        setCategory={(value: string) => {
          setCategory(value);
          navigate("/ecommerce-project/products/category/" + value);
        }}
      />
      {/* <div className="flex overflow-x-auto slider">
        {listCat.map((item, index) => {
          return (
            <Link to={"/products/category/" + item} key={`cat-link-${index}`}>
              <div className="h-[170px] w-[150px] border-[0.5px] border-l-0 border-gray-200 hover:bg-[#8CB7F5] grid grid-rows-[2fr_1fr] items-center justify-center relative py-1">
                <img
                  src={
                    listImg.find((item2) => item2.productTitle === item)
                      ?.productImg
                  }
                  alt=""
                  className="w-full h-[120px] block"
                />
                <div className="text-center text-sm text-[black] relative bottom-0 p-2">
                  {item}
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};

export default Category;
