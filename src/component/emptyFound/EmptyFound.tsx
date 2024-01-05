import React from "react";

type Props = {
  setHeight: string;
  text: string;
  editClass?: string;
};

const EmptyFound = (props: Props) => {
  return (
    <div
      className={`${
        props.editClass ? props.editClass : "flex justify-center items-center"
      }`}
      style={{ minHeight: props.setHeight }}>
      {props.text}
    </div>
  );
};

export default EmptyFound;
