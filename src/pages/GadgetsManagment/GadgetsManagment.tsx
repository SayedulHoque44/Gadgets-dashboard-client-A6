import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useGetAllGadgetsQuery } from "../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import AddNewGadget from "./AddNewGadget/AddNewGadget";
import CardContainer from "./CardContainer/CardContainer";
import PriceRange from "./PriceRange/PriceRange";
import SearchGadgets from "./SearchGadgets/SearchGadgets";
import SeeAll from "./SeeAll/SeeAll";

const GadgetsManagment = () => {
  const [query, setQuery] = useState({});
  const { data, isLoading } = useGetAllGadgetsQuery(query);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: FieldValues) => {
    const filter = {
      minPrice: value[0],
      maxPrice: value[1],
    };

    setQuery({
      ...data,
      ...filter,
    });
  };
  const handelSeeAll = () => {
    setQuery({});
  };

  const [value, setValue] = useState<number[]>([20, 37]);

  const handlePriceRange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // console.log(data, error, isLoading);
  // console.log(value);
  return (
    <div className="lg:p-20">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        All Gadgets
      </h1>
      <div className=" grid grid-cols-1 xl:grid-cols-4 items-center gap-2">
        {/*  */}
        <AddNewGadget open={open} setOpen={setOpen} />
        {/*  */}
        <SearchGadgets onSubmit={onSubmit} />
        {/*  */}
        <PriceRange handleChange={handlePriceRange} value={value} />
      </div>
      {Object.keys(query).length > 0 && (
        <SeeAll handelSeeAll={handelSeeAll} query={query} />
      )}
      {/*  */}
      <CardContainer allGadgets={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default GadgetsManagment;
