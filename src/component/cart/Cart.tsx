type Props = {
  listItem: string[];
  isOpen?: boolean;
};

const Cart = (props: Props) => {
  return (
    <div
      className={`absolute z-[2] top-2 right-0 ease-in-out duration-[3000ms] ${
        props.isOpen
          ? "block translate-y-[60px]"
          : "hidden translate-y-[-100px]"
      } max-w-[400px] w-[300px]`}>
      {props.listItem.map(() => {
        return (
          <div className="flex items-center justify-around bg-gray-400 py-1">
            <div className="rounded-full w-[50px] h-[50px] bg-white text-center overflow-hidden">
              <img
                src="https://www.chuwi.com/public/upload/image/20230316/fb8c9182e3a9ab9d52e13c1235ef2b90.png"
                alt="sampleImg"
              />
            </div>
            <div>
              <div>laptop</div>
              <div>quantity : 1</div>
            </div>
            <div>$100</div>
            <div className="w-[50px] flex justify-around items-center gap-2">
              <button>
                <i className="fa-solid fa-gear"></i>
              </button>
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
      <div className="w-full">
        <button className="w-full py-2 bg-[orange] text-white">Payment</button>
      </div>
    </div>
  );
};

export default Cart;
