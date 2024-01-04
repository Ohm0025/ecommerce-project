import "./FilterBox.css";
import DropDownSort from "./DropDownSort";
import DropDownFilter from "./DropDownFilter";
import FilterSM from "./FilterSM";
import BtnLayout from "./BtnLayout";

type Props = {
  isProductPage?: boolean;
};

const FilterBox = ({ isProductPage }: Props) => {
  return (
    <div
      className={`col-span-8 grid grid-cols-8 gap-1 bg-white shadow sticky top-[102px] sm:static z-10 sm:bg-transparent sm:flex sm:flex-col sm:col-span-1 sm:gap-2`}>
      <DropDownSort />
      <DropDownFilter />
      <BtnLayout />
      <FilterSM />
    </div>
  );
};

export default FilterBox;
