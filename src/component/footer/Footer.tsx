type Props = {
  isAuth?: boolean;
};

const Footer = (props: Props) => {
  return (
    <>
      <div
        className={`mt-[auto] mb-[20px] w-full bg-white p-3 shadow ${
          props.isAuth ? "mt-0" : ""
        }`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2">
          <div className="flex flex-col gap-1">
            <span className="font-semibold mb-1 px-4">ศูนย์ช่วยเหลือ</span>
            <div className="text-gray-500 text-sm">สั่งซื้อสินค้าอย่างไร</div>
            <div className="text-gray-500 text-sm">เริ่มขายสินค้าอย่างไร</div>
            <div className="text-gray-500 text-sm">การจัดส่งสินค้า</div>
          </div>
          <div>
            <div className="font-semibold mb-1 text-center">
              วิธีการชำระเงิน
            </div>
            <div className="flex flex-col items-center gap-[5px]">
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
            <span className="font-semibold mb-2 px-4">ติดตามเรา</span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <i className="fa-brands fa-facebook text-[18px] text-gray-500"></i>
                <span className="text-gray-500 text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-brands fa-instagram text-[18px] text-gray-500"></i>
                <span className="text-gray-500 text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-brands fa-line text-[18px] text-gray-500"></i>
                <span className="text-gray-500 text-sm">Line</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-1">ดาวน์โหลด</span>
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
      </div>
      <div className="bg-[#3d8bfd] w-full text-white p-2 text-sm text-center shadow">
        <div className="tracking-wider">
          &copy; 2023 Ohm0025 All Rights Reserved
        </div>
        <div className="tracking-wider">
          Country & Region: สิงคโปร์ | อินโดนีเซีย | ไทย | มาเลเซีย
        </div>
      </div>
    </>
  );
};

export default Footer;
