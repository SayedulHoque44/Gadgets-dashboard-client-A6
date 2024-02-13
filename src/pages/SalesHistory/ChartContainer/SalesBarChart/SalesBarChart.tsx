import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ModifiedChartData } from "../../../../utils/utils";
import { TSalesFull } from "../SalesLineChart/SalesLineChart";
const SalesBarChart = ({ sales }: { sales: TSalesFull[] }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-center">Sold in Date</h1>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={ModifiedChartData(sales)}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="soldDate" />

            <YAxis stroke="#82ca9d" />
            <Tooltip />
            <Legend />

            <Bar dataKey="SoldQuantity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;
