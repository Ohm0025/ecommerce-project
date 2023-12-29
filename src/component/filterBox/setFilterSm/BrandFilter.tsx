import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type Props = {
  listBrands: string[];
};

const BrandFilter = (props: Props) => {
  const [isCheckBox, setIsCheckBox] = useState(false);
  return (
    <div className={`border-t-2 py-2 ${isCheckBox ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1">
        <span>Brands</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsCheckBox((prev) => !prev)}>
          <i
            className={`fa-solid fa-chevron-${isCheckBox ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isCheckBox ? "active" : "inactive"}`}>
        <FormGroup className={`px-1 py-1 `}>
          {props.listBrands.map((item, index) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                label={item}></FormControlLabel>
            );
          })}
        </FormGroup>
      </div>
    </div>
  );
};

export default BrandFilter;
