import React, { useState } from "react";
import ListCartItem from "../../component/listCartItem/ListCartItem";
import ListCartButton from "../../component/listCartButton/ListCartButton";
import ListCartCheckOut from "../../component/listCartCheckOut/ListCartCheckOut";
import AlsoLike from "../../component/alsoLike/AlsoLike";
import ModalConfirmOrder from "../../component/modalConfirmOrder/ModalConfirmOrder";
import { useUserCart } from "../../store/currentCart";
import EmptyFound from "../../component/emptyFound/EmptyFound";

type Props = {};

const CheckOutPage = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const callBack = () => setOpenModal(true);
  const { userCart } = useUserCart();

  return (
    <div className="min-h-[100vh] w-[90%] sm:w-[80%] mx-auto mb-[6.25rem]">
      <div className="font-semibold text-[20px] col-span-full self-center mb-3 mt-2 sm:mt-0 pl-3 sm:pl-0">
        My Cart <span>{`( ${3} )`}</span>
      </div>
      <div className="flex gap-5 flex-col md:flex-row ">
        {userCart.length > 0 ? (
          <div className="flex flex-col border shadow bg-white border-gray-200 rounded-md overflow-x-hidden px-4 max-h-[400px] w-full">
            <div className="overflow-y-auto">
              {userCart.map((item, index) => {
                return (
                  <ListCartItem item={item} key={`usercart-item-${index}`} />
                );
              })}
            </div>
            <ListCartButton />
          </div>
        ) : (
          <EmptyFound
            text={"no item in cart"}
            setHeight="100px"
            editClass="flex flex-col border shadow bg-white border-gray-200 rounded-md overflow-x-hidden px-4 max-h-[400px] w-full items-center justify-center"
          />
        )}
        <ListCartCheckOut callBack={callBack} />
      </div>
      <AlsoLike />
      <ModalConfirmOrder
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default CheckOutPage;
