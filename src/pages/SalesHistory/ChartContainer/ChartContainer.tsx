import ChartLoader from "../ChartLoader/ChartLoader";
import SalesBarChart from "./SalesBarChart/SalesBarChart";
import SalesLineChart, { TSalesFull } from "./SalesLineChart/SalesLineChart";

const ChartContainer = ({
  sales,
  isLoading,
}: {
  isLoading: boolean;
  sales: TSalesFull[];
}) => {
  return (
    <div>
      {isLoading ? (
        <ChartLoader />
      ) : sales.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <SalesLineChart sales={sales} />
          <SalesBarChart sales={sales} />
        </div>
      ) : (
        <h1 className="text-red-400 font-semibold text-center text-xl">
          There's no sales found!
        </h1>
      )}
    </div>
  );
};

export default ChartContainer;
