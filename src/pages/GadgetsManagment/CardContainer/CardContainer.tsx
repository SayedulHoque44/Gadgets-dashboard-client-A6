import { useState } from "react";
import { toast } from "sonner";
import { useDeleteMultiGadgetsMutation } from "../../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { TGadgets } from "../../../types/Types";
import CardBox from "./Card/CardBox";
import CardLoader from "./CardLoader/CardLoader";

type TCardContainerProsp = {
  allGadgets: TGadgets[];
  isLoading: boolean;
};

const CardContainer = ({ allGadgets, isLoading }: TCardContainerProsp) => {
  const [selectMulti, setSelectMulti] = useState([]);
  const [deleteMultiGadgets, { isLoading: isMultiDeleteLoading }] =
    useDeleteMultiGadgetsMutation();

  const handleDeleteMulti = async () => {
    const apiValue = {
      gadgetsIdArray: selectMulti,
    };
    try {
      const res = await deleteMultiGadgets(apiValue).unwrap();
      toast.success(res.message);
      setSelectMulti([]);
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="py-10">
      {selectMulti.length > 0 && (
        <div className="flex py-3">
          <button
            disabled={isMultiDeleteLoading}
            onClick={handleDeleteMulti}
            className="text-white disabled:bg-gray-500  bg-red-500 border-none py-3 rounded px-10  "
            type="submit">
            Delete Selected Gadgets
          </button>
        </div>
      )}
      {isLoading ? (
        <CardLoader />
      ) : allGadgets.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {allGadgets.map((gadGets, index) => (
            <CardBox
              gadGets={gadGets}
              key={index}
              selectMulti={selectMulti}
              setSelectMulti={setSelectMulti}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-red-400 font-semibold text-center text-xl">
          There's no gadgets found!
        </h1>
      )}
    </div>
  );
};

export default CardContainer;
