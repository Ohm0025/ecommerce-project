import "./FilterBox.css";
import DropDownSort from "./DropDownSort";
import DropDownFilter from "./DropDownFilter";
import FilterSM from "./FilterSM";
import BtnLayout from "./BtnLayout";

type Props = {};

const FilterBox = (props: Props) => {
  return (
    <div className="grid grid-cols-8 gap-1 bg-white p-2 mt-1 shadow sticky top-[147px] sm:static left-0 z-10 sm:bg-transparent sm:flex sm:flex-col sm:gap-2">
      <DropDownSort />
      <DropDownFilter />
      <BtnLayout />
      <FilterSM />
    </div>
  );
};

export default FilterBox;
