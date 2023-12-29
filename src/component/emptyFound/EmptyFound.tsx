import React from "react";

type Props = {
  setHeight: string;
  text: string;
};

const EmptyFound = (props: Props) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: props.setHeight }}>
      {props.text}
    </div>
  );
};

export default EmptyFound;
