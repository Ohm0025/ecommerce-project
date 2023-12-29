import React, { useState } from "react";
import Dropdown from "react-dropdown";
import CategoryFilter from "./setFilterSm/CategoryFilter";
import BrandFilter from "./setFilterSm/BrandFilter";
import PriceFilter from "./setFilterSm/PriceFilter";

type Props = {};

const mockOptions = ["option 1", "option 2", "option 3"];

const FilterSM = (props: Props) => {
  return (
    <div className="hidden sm:block">
      <CategoryFilter listCat={mockOptions} />
      <BrandFilter listBrands={mockOptions} />
      <PriceFilter />
    </div>
  );
};

export default FilterSM;
