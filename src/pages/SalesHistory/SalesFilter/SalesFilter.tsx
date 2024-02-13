import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type TSalesFilterProps = {
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  history: string;
};

const SalesFilter = ({ history, setHistory }: TSalesFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof history>) => {
    setHistory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // console.log(history);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">History</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={history}
        label="Age"
        onChange={handleChange}>
        <MenuItem value={"Daily"}>Daily</MenuItem>
        <MenuItem value={"Weekly"}>Weekly</MenuItem>
        <MenuItem value={"Monthly"}>Monthly</MenuItem>
        <MenuItem value={"Yearly"}>Yearly</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SalesFilter;
