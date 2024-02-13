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
        <FaMinus size={20} />
      </span>
      <span className="py-1 px-4 border-2 font-bold text-lg border-gray-400">
        {count}
      </span>
      <span
        onClick={handleIncrese}
        className="p-2 font-semibold  cursor-pointer">
        <FaPlus size={20} />
      </span>
    </div>
  );
};

export default Quantity;
