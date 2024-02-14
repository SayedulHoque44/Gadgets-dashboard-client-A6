import { useState } from "react";
import { toast } from "sonner";
import {
  addToCart,
  useShowCart,
} from "../../../../redux/features/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TGadgets } from "../../../../types/Types";
import Quantity from "./Quantity/Quantity";

type TSalesCardProp = {
  gadgets: TGadgets;
};

const SalesCard = ({ gadgets }: TSalesCardProp) => {
  const { name, Category, imageUrl, modelNumber, price, quantity, _id } =
    gadgets;
  const dispatch = useAppDispatch();
  const CartItems = useAppSelector(useShowCart);

  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const salesInfo = {
    productId: gadgets._id,
    quantity: count,
    buyerName: "",
  };

  //
  const handleIncrese = () => {
    if (count >= gadgets.quantity) {
      return toast.error("Not Enough in Stock!");
    }

    setCount((prev) => prev + 1);
  };
  const handleDecrese = () => {
    if (count === 1) {
      return;
    }

    setCount((prev) => prev - 1);
  };

  //
  const handleAddToCart = (id: string) => {
    toast.success(`${name} added to Cart!`);
    dispatch(addToCart({ id, quantity: count }));
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 w-full h-96 object-cover rounded-t-lg"
        src={imageUrl}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <div className="space-y-3">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex justify-between">
            <span>Model Number:</span>
            <span>{modelNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Category:</span>
            <span>{Category}</span>
          </div>
          <div className="flex justify-between">
            <span>Quantity:</span>
            <span>{quantity}</span>
          </div>
        </div>

        <Quantity
          count={count}
          handleIncrese={handleIncrese}
          handleDecrese={handleDecrese}
        />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={() => handleAddToCart(_id)}
            disabled={CartItems.some((item) => item.id === _id)}
            // onClick={handleOpen}
            className="text-white disabled:bg-gray-500 disabled:hover:bg-gray-500 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
            Add To Cart
          </button>
        </div>
      </div>
      {/* modal */}
      {/* {open && (
        <SaleModal
          open={open}
          gadgets={gadgets}
          setOpen={setOpen}
          salesInfo={salesInfo}
        />
      )} */}
    </div>
  );
};

export default SalesCard;
