import React from "react";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

//using 1 component we will be utilising the all 3 slider by giving dynamic value
const SliderComponent = ({
  //this are all props to make slidercomponent work dynamically
  defaultValue,
  min,
  max,
  label,
  unit,
  value,
  steps,
  onChange,
  amount,
}) => {
  return (
    /*   stack is use to achive flex like feature*/
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit}
          {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
