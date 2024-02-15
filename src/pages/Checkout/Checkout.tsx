import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Form from "../../components/Form/Form";
import FormInput from "../../components/Form/FormInput";
import {
  deleteFromCart,
  deleteFromCartAll,
  useShowCart,
} from "../../redux/features/Cart/CartSlice";
import { useAddSalesMutation } from "../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Checkout = () => {
  const CartItems = useAppSelector(useShowCart);
  const [addSales, { isLoading }] = useAddSalesMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    // const salesInfos = {
    //   productId,
    //   quantity,
    //   ...data,
    // };
    CartItems.forEach(async (item) => {
      const salesInfos = {
        productId: item.id,
        quantity: item.quantity,
        ...data,
      };

      try {
        const res = await addSales(salesInfos).unwrap();
        toast.success(res.message);
        dispatch(deleteFromCart(item));
        navigate("/dashboard/SuccessCartPage");
      } catch (error: any) {
        toast.error(error.data.message);
      }
    });
  };

  if (CartItems.length === 0) {
    return (
      <div className="lg:p-20">
        <div className="p-10 bg-gray-200 text-center space-y-3 text-2xl">
          <h1 className="font-semibold">There are No Cart!</h1>
          <p>Let's Shopping!</p>
          <Link className="mt-5 inline-block" to={"/dashboard/SalesManagement"}>
            <Button>Sells!</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:p-20">
      <div className="grid xl:grid-cols-5 border-2">
        <div className=" bg-gray-200  font-semibold  p-10 xl:col-span-3 text-gray-800">
          <div className="flex justify-between">
            <h2 className="text-xl mb-10">Order Summary</h2>
            {CartItems.length !== 0 && (
              <span
                onClick={() => dispatch(deleteFromCartAll())}
                className="font-bold text-red-500 cursor-pointer">
                Remove All
              </span>
            )}
          </div>
          <div>
            <div className="border-y-2 border-gray-300 py-5 grid grid-cols-3 text-[1rem]">
              <span>Product Name</span>
              <span>Quantity</span>
              <span>Price</span>
            </div>
            {CartItems.map((item, index: number) => (
              <CartItemContainer index={index} key={index} item={item} />
            ))}
          </div>
          <div className="py-3 space-y-2">
            <div className="flex justify-between font-semibold">
              <span>Grand Total</span>
              <span>
                $
                {CartItems.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="p-10 xl:col-span-2 ">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Contact Information
          </h2>
          <div>
            <Form onSubmit={onSubmit}>
              <FormInput
                type={"text"}
                name={"buyerName"}
                label={"Buyer Name"}
              />
              <FormInput
                type={"text"}
                name={"contactNumber"}
                label={"Contact Number"}
              />

              <button
                disabled={isLoading}
                className="text-white disabled:bg-gray-500 w-full bg-blue-500 border-none p-2 "
                type="submit">
                Place Order
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
