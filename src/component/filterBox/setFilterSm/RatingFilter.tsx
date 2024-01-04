import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import StarRating from "../../starRating/StarRating";

type Props = {};

const RatingFilter = (props: Props) => {
  const [isCheckBox, setIsCheckBox] = useState(false);
  return (
    <div className={`border-t-2 py-2 ${isCheckBox ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1 mt-1">
        <span>Ratings</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsCheckBox((prev) => !prev)}>
          <i
            className={`fa-solid fa-chevron-${isCheckBox ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isCheckBox ? "active" : "inactive"}`}>
        <FormGroup className={`px-1 py-1 `}>
          {[5, 4, 3, 2, 1].map((item, index) => {
            return (
              <FormControlLabel
                key={`list-rating-${index}`}
                control={<Checkbox />}
                label={<StarRating rate={item} />}></FormControlLabel>
            );
          })}
        </FormGroup>
      </div>
    </div>
  );
};

export default RatingFilter;
