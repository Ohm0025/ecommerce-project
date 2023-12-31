import React from "react";

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
];

const CheckOutPage = (props: Props) => {
  return (
    <div className="min-h-[100vh]">
      <div>
        My Cart <span>{`( ${3} )`}</span>
      </div>
      <div className="flex flex-col">
        {mockProductList.map((item, index) => {
          return (
            <div className="grid grid-cols-1 bg-white sm:grid-cols-2">
              <div className="flex">
                <div className="h-[100px]">
                  <img src={item.img} className="h-full w-auto" alt="" />
                </div>
                <div>Product title</div>
              </div>
              <div>
                <div>product price</div>
                <div>product counter</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOutPage;
