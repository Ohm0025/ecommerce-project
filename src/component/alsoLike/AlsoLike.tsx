import React from "react";
import SuggestItem from "./suggestItem/SuggestItem";

type Props = {};

const mockProductList = [
  {
    title: "product",
    img: "https://www.family.abbott/my-en/get-samples/_jcr_content/root/container_copy/columncontrol_copy/tab_item_no_0/image.coreimg.85.512.png/1687175603720/product-detail-component-sim-s3.png",
  },
  {
    title: "product",
    img: "https://www.family.abbott/my-en/get-samples/_jcr_content/root/container_copy/columncontrol_copy/tab_item_no_0/image.coreimg.85.512.png/1687175603720/product-detail-component-sim-s3.png",
  },
  {
    title: "product",
    img: "https://www.family.abbott/my-en/get-samples/_jcr_content/root/container_copy/columncontrol_copy/tab_item_no_0/image.coreimg.85.512.png/1687175603720/product-detail-component-sim-s3.png",
  },
  {
    title: "product",
    img: "https://www.family.abbott/my-en/get-samples/_jcr_content/root/container_copy/columncontrol_copy/tab_item_no_0/image.coreimg.85.512.png/1687175603720/product-detail-component-sim-s3.png",
  },
];

const AlsoLike = (props: Props) => {
  return (
    <div className="mt-5 bg-white py-4 px-2 rounded-md overflow-hidden shadow">
      <div className="font-semibold px-3 pb-3">You also like</div>
      <div className="flex gap-3 justify-around overflow-x-auto">
        {mockProductList.map((item) => {
          return <SuggestItem listItem={item} />;
        })}
      </div>
    </div>
  );
};

export default AlsoLike;
