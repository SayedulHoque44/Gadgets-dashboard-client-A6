import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TGadgets } from "../../../../types/Types";
import { ModifiedChartData } from "../../../../utils/utils";
export type TSalesFull = {
  buyerName: string;
  createdAt: string;
  productId: TGadgets;
  quantity: number;
  _id: string;
};

const SalesLineChart = ({ sales }: { sales: TSalesFull[] }) => {
  // console.log(ModifiedChartData(sales));
  return (
    <div>
      <h1 className="font-semibold text-xl text-center">
        Sold Of Gadgets Quantity
      </h1>
      <div className="h-[500px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            className="h-[200px] w-full"
            data={ModifiedChartData(sales)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey={"SoldQuantity"} />
            <XAxis dataKey={"GadgetsName"} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="SoldQuantity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesLineChart;
