import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import { useDeleteGadgetsMutation } from "../../../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { TGadgets } from "../../../../types/Types";
import UpdateGadgetsModal from "./UpdateGadgetsModal/UpdateGadgetsModal";

const dummyImage =
  "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg";

type TCardBox = {
  gadGets: TGadgets;
  selectMulti: string[];
  setSelectMulti: any;
};

const CardBox = ({ gadGets, selectMulti, setSelectMulti }: TCardBox) => {
  const [open, setOpen] = useState(false);
  const [deleteSingleGadgets, { isLoading }] = useDeleteGadgetsMutation();
  const handleOpen = () => setOpen(true);
  //
  const handleDeleteSingleGadgets = async () => {
    const gadgetsId = gadGets._id;
    try {
      const res = await deleteSingleGadgets({ gadgetsId }).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  //
  const handleCheckBox = (e: any) => {
    const gadgetsId = gadGets._id;
    const checked = e.target.checked;
    if (checked) {
      setSelectMulti([...selectMulti, gadgetsId]);
    } else {
      const deleteIdFromPreviousArray = selectMulti.filter(
        (id: string) => id !== gadgetsId
      );
      setSelectMulti(deleteIdFromPreviousArray);
    }
  };

  //
  const {
    name,
    Brand,
    Category,
    imageUrl,
    modelNumber,
    price,
    quantity,
    releaseDate,
    features,
  } = gadGets;
  // console.log(isModalOpen, gadgetsEdit);
  return (
    <>
      <div className="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <input
          type="checkbox"
          onChange={handleCheckBox}
          className="checkbox checkbox-primary absolute top-3 right-3"
        />
        <div>
          <img
            className="rounded-t-lg h-[400px] object-cover"
            src={imageUrl ? imageUrl : dummyImage}
            alt="gadgets"
          />

          <div className="p-5 flex flex-col space-y-3 text-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex justify-between">
              <span>Model Number:</span>
              <span>{modelNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>Price:</span>
              <span>{price} $</span>
            </div>
            <div className="flex justify-between">
              <span>Brand:</span>
              <span>{Brand}</span>
            </div>
            <div className="flex justify-between">
              <span>Category:</span>
              <span>{Category}</span>
            </div>
            <div className="flex justify-between">
              <span>Quantity:</span>
              <span>{quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Release Date:</span>
              <span>{releaseDate}</span>
            </div>
            {features && (
              <>
                <h2 className="text-xl border-b-2 ">Featurs:</h2>
                {Object.entries(features).map((featureEleArray, index) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <span>{featureEleArray[0]}:</span>
                      <span>{featureEleArray[1] as string}</span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between p-5">
          <button
            onClick={handleOpen}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <CiEdit size={20} className="mr-2" /> Edit
          </button>
          <button
            onClick={handleDeleteSingleGadgets}
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg disabled:bg-gray-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <MdDeleteOutline size={20} className="mr-2" /> Delete
          </button>
        </div>
        {open && (
          <UpdateGadgetsModal gadGets={gadGets} setOpen={setOpen} open={open} />
        )}
      </div>
    </>
  );
};

export default CardBox;
