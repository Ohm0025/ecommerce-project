import Dropdown from "react-dropdown";

type Props = {};
const mockList = ["list1", "list2"];

const DropDownSort = ({}: Props) => {
  return (
    <Dropdown
      options={mockList}
      placeholder="Sort"
      placeholderClassName="custom-dropdown-place2"
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
            d="M2.25 13.5H6.75V12H2.25V13.5ZM2.25 4.5V6H15.75V4.5H2.25ZM2.25 9.75H11.25V8.25H2.25V9.75Z"
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
            d="M2.25 13.5H6.75V12H2.25V13.5ZM2.25 4.5V6H15.75V4.5H2.25ZM2.25 9.75H11.25V8.25H2.25V9.75Z"
            fill="#8B96A5"
          />
        </svg>
      }
    />
  );
};

export default DropDownSort;
