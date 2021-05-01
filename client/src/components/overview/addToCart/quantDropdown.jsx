import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { updateQuantDropDownDisplay } from './cartSlice.js';

const QuantDropdown = (props) => {
  const dispatch = useDispatch();
  const dropDownDisplay = useSelector((state) => state.cart.quantDropDownDisplay);

  return (
    <>
      <InputLabel id="quantSelect">Select quantity</InputLabel>
      <Select
        labelId="quantSelect"
        aria-label="quantity selector"
        aria-required
        isClearable ={false}
        value={dropDownDisplay}
        isDisabled={props.disabled}
        options={props.options}
        onChange={(selected) => {
          dispatch(updateQuantDropDownDisplay(selected));
        }} />
    </>
  );
};

export default QuantDropdown;
