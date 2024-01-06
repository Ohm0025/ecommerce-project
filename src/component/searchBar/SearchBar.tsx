import { useSearchBar } from "./SearchBar.hook";
import Dropdown from "react-dropdown";
import "./SearchBar.css";
import { useLinkRef } from "../../store/linkRef";
import { useProductCategory } from "../../store/categoryAll";

const SearchBar = () => {
  const { listProducts } = useSearchBar();

  const { setCategory, setQuery, category, query } = useLinkRef();
  const { productCategories } = useProductCategory();

  return (
    <div className="flex h-[40px] gap-[1px] order-last sm:order-1 gap-y-1 items-center border-2 rounded-[10px] border-[#3d8bfd] bg-[#3d8bfd] w-[100%] mx-auto sm:w-[50%]">
      <input
        // {...fieldKeyword}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="p-[8px] h-full flex flex-glow-1 border outline-none text-[13px] md:text-[17px] w-full rounded-[8px] rounded-l-[8px] rounded-r-none"
      />
      <div className="flex h-[40px] w-full">
        <Dropdown
          className="custom-dropdown-root text-[10px] md:text-[15px]"
          controlClassName="custom-dropdown-control"
          arrowClassName="custom-dropdown-arrow"
          arrowOpen={<i className="fa-solid fa-chevron-up"></i>}
          arrowClosed={<i className="fa-solid fa-chevron-down"></i>}
          options={["All category", ...productCategories.data]}
          value={category}
          onChange={(e) => setCategory(e.value)}
        />
        <button
          className="bg-[#3d8bfd] text-[10px] md:text-[17px] text-[white] px-4 col-span-1 rounded-[10px]"
          onClick={() => listProducts()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
