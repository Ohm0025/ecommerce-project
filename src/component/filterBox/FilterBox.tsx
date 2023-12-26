import React from "react";
import useFilterBox from "./FilterBox.hook";
import CheckBox from "../checkBox/CheckBox";

type Props = {};

const FilterBox = (props: Props) => {
  const { productCategories, setCurrentCat } = useFilterBox();
  return (
    <div className="row-[span_16_/_span_16]">
      <div>
        category
        <div>
          {productCategories.data.map((item) => (
            <CheckBox catName={item} cb={setCurrentCat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
