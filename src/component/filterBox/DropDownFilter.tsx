import React from "react";
import Dropdown from "react-dropdown";

type Props = {};
const mockList = ["list1", "list2"];

const DropDownFilter = (props: Props) => {
  return (
    <Dropdown
      options={mockList}
      placeholder={"Filter.."}
      className="custom-dropdown-root2 text-[12px] sm:hidden"
      controlClassName="custom-dropdown-control2"
      arrowClassName="custom-dropdown-arrow2"
      arrowOpen={
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.25343 4.5H12.7534L8.99593 9.225L5.25343 4.5ZM3.19093 4.2075C4.70593 6.15 7.50343 9.75 7.50343 9.75V14.25C7.50343 14.6625 7.84093 15 8.25343 15H9.75343C10.1659 15 10.5034 14.6625 10.5034 14.25V9.75C10.5034 9.75 13.2934 6.15 14.8084 4.2075C15.1909 3.7125 14.8384 3 14.2159 3H3.78343C3.16093 3 2.80843 3.7125 3.19093 4.2075Z"
            fill="#8B96A5"
          />
        </svg>
      }
      arrowClosed={
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.25343 4.5H12.7534L8.99593 9.225L5.25343 4.5ZM3.19093 4.2075C4.70593 6.15 7.50343 9.75 7.50343 9.75V14.25C7.50343 14.6625 7.84093 15 8.25343 15H9.75343C10.1659 15 10.5034 14.6625 10.5034 14.25V9.75C10.5034 9.75 13.2934 6.15 14.8084 4.2075C15.1909 3.7125 14.8384 3 14.2159 3H3.78343C3.16093 3 2.80843 3.7125 3.19093 4.2075Z"
            fill="#8B96A5"
          />
        </svg>
      }
    />
  );
};

export default DropDownFilter;
