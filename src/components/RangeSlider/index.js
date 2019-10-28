import React from 'react';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const RangeSlider = ({
  min,
  max,
  step,
  valueLabelDisplay,
  defaultValue,
  onChangeCommitted
}) => {
  return (
    <Slider
      ValueLabelComponent={ValueLabelComponent}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChangeCommitted={onChangeCommitted}
      valueLabelDisplay={valueLabelDisplay}
      aria-labelledby='range-slider'
    />
  );
};

function ValueLabelComponent(props) {
  const { children, open, value, valueLabelDisplay } = props;
  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  let labelText = '';

  if (props.valueLabelDisplay == 'money') {
    labelText = `R$ ${props.value}`;
  } else if (props.valueLabelDisplay == 'age') {
    labelText = `${props.value} anos`;
  } else {
    labelText = parseFloat(value);
  }

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement='top'
      title={labelText}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

export default RangeSlider;
