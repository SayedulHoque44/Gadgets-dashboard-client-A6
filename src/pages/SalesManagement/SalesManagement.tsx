import { useGetAvailableGadgetsQuery } from "../../redux/features/salesManagmentApi/salesManagmentApi";
import SalesCardContainer from "./SalesCardContainer/SalesCardContainer";

const SalesManagement = () => {
  const { data, isLoading } = useGetAvailableGadgetsQuery(undefined);
  return (
    <div className="lg:p-20">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        Sales Managment
      </h1>
      <SalesCardContainer gadgetsForSales={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default SalesManagement;
