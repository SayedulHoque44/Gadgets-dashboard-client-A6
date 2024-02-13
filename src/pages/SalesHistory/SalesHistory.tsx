import { useState } from "react";
import { useGetSalesHistoryQuery } from "../../redux/features/salesManagmentApi/salesManagmentApi";
import ChartContainer from "./ChartContainer/ChartContainer";
import SalesFilter from "./SalesFilter/SalesFilter";

const SalesHistory = () => {
  const [history, setHistory] = useState<string>("Daily");
  const { data, isLoading } = useGetSalesHistoryQuery(history);
  // console.log(data);
  return (
    <div className="lg:p-20">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        Sales History
      </h1>
      <div className="flex justify-end py-2">
        <SalesFilter history={history} setHistory={setHistory} />
      </div>
      <ChartContainer isLoading={isLoading} sales={data?.data} />
    </div>
  );
};

export default SalesHistory;
