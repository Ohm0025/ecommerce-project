import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFilterList } from "../../../store/filterList";

type Props = {};

const PriceFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { price, setPriceMaxMin } = useFilterList();

  console.log(price);
  return (
    <div className={`border-t-2 py-2 ${isOpen ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1 mt-1">
        <span>Price range</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsOpen((prev) => !prev)}>
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </button>
      </div>
      <div
        className={`dropdown-${isOpen ? "active" : "inactive"} px-1 sm:px-2`}>
        <Slider
          min={0}
          max={999999}
          value={price}
          step={10}
          getAriaLabel={() => "Temperature range"}
          onChange={(event: Event, newValue: number | number[]) => {
            setPriceMaxMin(newValue as number[]);
          }}
          valueLabelDisplay="auto"
          getAriaValueText={(value: number) => `$ ${value}`}
        />

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-x-3">
            <div className="flex flex-col col-span-1">
              <label htmlFor="min-price" className="text-sm">
                Max
              </label>
              <input
                id="min-price"
                type="number"
                className="outline-0 border rounded-md p-1"
                placeholder={"" + price[1]}
                // onChange={(e) =>
                //   setPriceMaxMin([...price].splice(1, 1, +e.target.value))
                //}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label htmlFor="max-price" className="text-sm">
                Min
              </label>
              <input
                id="max-price"
                type="number"
                className="outline-0 border rounded-md p-1"
                placeholder={"" + price[0]}
                // onChange={(e) =>
                //   setPriceMaxMin([...price].splice(0, 1, +e.target.value))
                // }
              />
            </div>
          </div>
          <div>
            <button className="w-full bg-[#3d8bfd] rounded-md py-2 text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
