import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TenureSelect = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      longTerm: e.target.value,
    });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={5}
        value={data.longTerm}
        label="Tenure"
        onChange={handleChange}
      >
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Years</MenuItem>
        <MenuItem value={15}>15 Years</MenuItem>
        <MenuItem value={20}>20Years</MenuItem>
        <MenuItem value={25}>25 Years</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
