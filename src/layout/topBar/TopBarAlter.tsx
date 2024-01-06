import HeadBar from "../../component/headBar/HeadBar";
import NavBar from "../../component/navBar/NavBar";
import SearchBar from "../../component/searchBar/SearchBar";
import FilterBox from "../../component/filterBox/FilterBox";

type Props = {
  isHome: boolean;
};

const TopBarAlter = ({ isHome }: Props) => {
  return (
    <div className="flex flex-col sm:hidden w-full p-3 bg-white shadow-md sticky top-0 z-[12]">
      <div className="flex justify-between">
        <HeadBar />

        <NavBar />
      </div>
      {isHome ? (
        <SearchBar />
      ) : (
        <div className="col-span-full gap-[1px] order-last sm:order-1 sm:col-span-6 gap-y-1 grid grid-cols-1 sm:grid-cols-2 sm:min-w-[80%] sm:m-auto"></div>
      )}
      <div>
        <FilterBox />
      </div>
    </div>
  );
};

export default TopBarAlter;
