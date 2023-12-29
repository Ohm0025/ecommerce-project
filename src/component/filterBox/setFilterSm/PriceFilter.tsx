import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {};

const PriceFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState([0, 999999]);

  useEffect(() => {
    console.log(price);
  }, [price]);
  return (
    <div className={`border-t-2 py-2 ${isOpen ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1">
        <span>Category</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsOpen((prev) => !prev)}>
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isOpen ? "active" : "inactive"}`}>
        <Slider
          min={0}
          max={999999}
          step={1000}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(event: Event, newValue: number | number[]) => {
            setPrice(newValue as number[]);
          }}
          valueLabelDisplay="auto"
          getAriaValueText={(value: number) => `$ ${value}`}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
