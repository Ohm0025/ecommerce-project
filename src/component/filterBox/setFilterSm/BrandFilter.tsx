import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useProductListStore } from "../../../store/productList";
import { useLinkRef } from "../../../store/linkRef";

type Props = {
  listBrands: string[];
};

const BrandFilter = (props: Props) => {
  const [isCheckBox, setIsCheckBox] = useState(false);
  const { productList } = useProductListStore();
  const { setBrand, brand, category } = useLinkRef();

  const listBand = productList.data.map((item) => {
    return item.brand;
  });

  return (
    <div className={`border-t-2 py-2 ${isCheckBox ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1 mt-1">
        <span>Brands</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsCheckBox((prev) => !prev)}>
          <i
            className={`fa-solid fa-chevron-${isCheckBox ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isCheckBox ? "active" : "inactive"}`}>
        {category && (
          <FormGroup className={`px-1 py-1 `}>
            {listBand.map((item, index) => {
              return (
                <FormControlLabel
                  key={`list-brand-${index}`}
                  control={
                    <Checkbox
                      onChange={(e) => {
                        if (brand === e.target.value) {
                          setBrand("");
                        } else {
                          setBrand(e.target.value);
                        }
                      }}
                      value={item}
                      checked={brand === item}
                    />
                  }
                  label={item}></FormControlLabel>
              );
            })}
          </FormGroup>
        )}
      </div>
    </div>
  );
};

export default BrandFilter;
