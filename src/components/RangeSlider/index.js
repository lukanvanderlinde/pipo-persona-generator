import React from 'react';
import Slider from '@material-ui/core/Slider';

const RangeSlider = ({
  min,
  max,
  valueLabelDisplay,
  defaultValue,
  onChangeCommitted
}) => {
  return (
    <Slider
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChangeCommitted={onChangeCommitted}
      valueLabelDisplay={valueLabelDisplay}
      aria-labelledby='range-slider'
    />
  );
};

export default RangeSlider;
