import React from "react";
import ListCartItem from "../../component/listCartItem/ListCartItem";
import ListCartButton from "../../component/listCartButton/ListCartButton";
import ListCartCheckOut from "../../component/listCartCheckOut/ListCartCheckOut";
import AlsoLike from "../../component/alsoLike/AlsoLike";

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

const CheckOutPage = (props: Props) => {
  return (
    <div className="min-h-[100vh] sm:w-[80%] mx-auto">
      <div className="font-semibold text-[20px] col-span-full self-center mb-3">
        My Cart <span>{`( ${3} )`}</span>
      </div>
      <div className="flex gap-5 flex-col md:flex-row ">
        <div className="flex flex-col border shadow bg-white border-gray-200 rounded-md overflow-x-hidden px-4 max-h-[400px] w-full">
          <div className="overflow-y-auto">
            {mockProductList.map((item, index) => {
              return <ListCartItem item={item} />;
            })}
          </div>
          <ListCartButton />
        </div>
        <ListCartCheckOut />
      </div>
      <AlsoLike />
    </div>
  );
};

export default CheckOutPage;
