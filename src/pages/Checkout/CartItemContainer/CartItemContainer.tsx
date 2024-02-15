/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import {
  TCartItem,
  addToCart,
  deleteFromCart,
} from "../../../redux/features/Cart/CartSlice";
import { useAppDispatch } from "../../../redux/hooks";
import Quantity from "../../SalesManagement/SalesCardContainer/SalesCard/Quantity/Quantity";
const CartItemContainer = ({
  item,
  index,
}: {
  item: TCartItem;
  index: number;
}) => {
  const { price, quantity, stock, imageUrl } = item;

  const dispatch = useAppDispatch();

  const handleIncrese = () => {
    if (quantity >= stock) {
      return toast.error("Not Enough in Stock!");
    }

    dispatch(addToCart({ ...item, quantity: quantity + 1 }));
    // setCount((prev) => prev + 1);
  };
  const handleDecrese = () => {
    if (quantity === 1) {
      return;
    }
    dispatch(addToCart({ ...item, quantity: quantity - 1 }));
    // setCount((prev) => prev - 1);
  };
  return (
    <div className="border-b-2 border-gray-300 py-5 grid grid-cols-3 items-center">
      <div className="flex items-center gap-3">
        <span>{index + 1}</span>
        <div>
          <img src={imageUrl} className="w-16" alt="" />
        </div>
        <div>
          <h3>Name</h3>
          <h4 className="text-gray-400">Brand</h4>
        </div>
      </div>
      <span className="flex justify-start">
        <Quantity
          count={quantity}
          handleIncrese={handleIncrese}
          handleDecrese={handleDecrese}
        />
      </span>
      <div className="flex justify-between item-center">
        <div className="flex flex-1 flex-col">
          <span>${price}</span>
          <span className="flex items-center">
            {quantity} <RxCross2 /> Items Subtotal = ${quantity * price}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <MdDelete
            onClick={() => dispatch(deleteFromCart(item))}
            size={22}
            className="text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemContainer;
