type TQuantityProps = {
  count: number;
  handleIncrese: () => string | number | void;
  handleDecrese: () => string | number | void;
};

import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = ({ count, handleIncrese, handleDecrese }: TQuantityProps) => {
  return (
    <div className="flex justify-center gap-3">
      <span
        onClick={handleDecrese}
        className="p-2 font-semibold  cursor-pointer">
        <FaMinus />
      </span>
      <span className="py-1 px-4 border-2 font-bold  border-gray-400">
        {count}
      </span>
      <span
        onClick={handleIncrese}
        className="p-2 font-semibold  cursor-pointer">
        <FaPlus />
      </span>
    </div>
  );
};

export default Quantity;
