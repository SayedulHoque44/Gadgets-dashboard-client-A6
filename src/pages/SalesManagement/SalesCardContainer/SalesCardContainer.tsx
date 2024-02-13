import { TGadgets } from "../../../types/Types";
import CardLoader from "../../GadgetsManagment/CardContainer/CardLoader/CardLoader";
import SalesCard from "./SalesCard/SalesCard";

type TSalesCardContainerProps = {
  gadgetsForSales: TGadgets[];
  isLoading: boolean;
};

const SalesCardContainer = ({
  gadgetsForSales,
  isLoading,
}: TSalesCardContainerProps) => {
  return (
    <div className="py-10">
      {isLoading ? (
        <CardLoader />
      ) : gadgetsForSales.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {gadgetsForSales.map((gadGets, index) => (
            <SalesCard key={index} gadgets={gadGets} />
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

export default SalesCardContainer;
