type Props = {
  listItem: ListItemType;
};

type ListItemType = {
  title: string;
  img: string;
};

const SuggestItem = ({ listItem }: Props) => {
  return (
    <div className="flex flex-col min-h-[200px] min-w-[140px]">
      <div className="h-[140px] bg-gray-200 flex justify-center items-center rounded-md p-1">
        <img src={`${listItem.img}`} alt="" className="h-full w-auto" />
      </div>
      <div className="px-1 mt-2">
        <span className="font-semibold text-[16px]">$99.50</span>
      </div>
      <div className="text-gray-400 px-1 text-[15px] h-[40px]">
        ekvepokvpoevpkpevp
      </div>
      <button className="text-[#0D6EFD] text-sm bg-white border border-gray-200 px-3 py-1 rounded-md">
        <span className="mr-3">
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span>Move to cart</span>
      </button>
    </div>
  );
};

export default SuggestItem;
