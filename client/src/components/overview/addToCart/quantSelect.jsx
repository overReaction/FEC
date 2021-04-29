import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { updateQuantDropDownDisplay } from './cartSlice.js';
import InputLabel from '@material-ui/core/InputLabel';

const QuantSelect = (props) => {
  const dispatch = useDispatch();
  const quant = useSelector((state) => state.cart.skuInfo.quantity);
  const dropDownDisplay = useSelector((state) => state.cart.quantDropDownDisplay);

  const getQuantities = (quantAvail) => {
    let quants = [];
    for (let x = 1; x <= quantAvail && x <= 15; x++) {
      quants.push({ value: x, label: x });
    }
    return quants;
  };

  if (quant) {
    return (
      <>
        <InputLabel id="quantSelect">Select quantity</InputLabel>
        <Select
          labelId="quantSelect"
          isClearable ={false}
          value={dropDownDisplay}
          options={getQuantities(quant)}
          onChange={(selected) => {
            dispatch(updateQuantDropDownDisplay(selected));
          }} />
      </>
    );
  } else {
    return (
      <>
        <InputLabel id="quantSelect">Select quantity</InputLabel>
        <Select
          labelId="quantSelect"
          isDisabled={true}
          isClearable ={false}
          value={dropDownDisplay}
          options={{}} />
      </>
    );
  }
};

export default QuantSelect;
