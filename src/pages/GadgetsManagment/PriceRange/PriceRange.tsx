import { Slider } from "@mui/material";

const PriceRange = ({
  value,
  handleChange,
}: {
  value: number[];
  handleChange: (_event: Event, newValue: number | number[]) => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Price Range</h2>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={110}
      />
    </div>
  );
};

export default PriceRange;
