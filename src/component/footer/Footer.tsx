import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-[auto] mb-[20px] w-full">
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          <span>ศูนย์ช่วยเหลือ</span>
          <span>สั่งซื้อสินค้าอย่างไร</span>
          <span>เริ่มขายสินค้าอย่างไร</span>
          <span>การจัดส่งสินค้า</span>
        </div>
        <div>
          <span>วิธีการชำระเงิน</span>
          <div className="flex flex-col gap-[5px]">
            <img
              src="https://www.truemoney.com/wp-content/uploads/2020/12/truemoneywallet-logo-20190424.png"
              alt="true_money"
              className="w-[100px] h-[40px] border shadow"
            />
            <img
              src="https://cdn.icon-icons.com/icons2/674/PNG/512/JCB_icon-icons.com_60552.png"
              alt="jcb"
              className="w-[100px] h-[40px] border shadow"
            />
            <img
              src="https://www.trendymobile.net/wp-content/uploads/visa-master-logo.jpg"
              alt="visa"
              className="w-[100px] h-[40px] border shadow"
            />
          </div>
        </div>
        <div>
          <span>ติดตามเรา</span>
          <div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-facebook text-[18px] text-gray-500"></i>
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-instagram text-[18px] text-gray-500"></i>
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-line text-[18px] text-gray-500"></i>
              <span>Line</span>
            </div>
          </div>
        </div>
        <div>
          <span>ดาวน์โหลดแอปพลิเคชั่น</span>
          <div className="flex items-center gap-1 border justify-center w-[150px] shadow my-[5px]">
            <i className="fa-brands fa-app-store-ios text-[18px] text-gray-500"></i>
            <span>App Store</span>
          </div>
          <div className="flex items-center gap-1 border justify-center w-[150px] shadow">
            <i className="fa-brands fa-google-play text-[18px] text-gray-500"></i>
            <span>Google Play</span>
          </div>
        </div>
      </div>
      <div>
        <span>&copy; 2023 Ohm0025. All Rights Reserved</span>
        <span>Country & Region: สิงคโปร์ | อินโดนีเซีย | ไทย | มาเลเซีย</span>
      </div>
    </div>
  );
};

export default Footer;
