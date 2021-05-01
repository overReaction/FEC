import React from 'react';
import { useSelector } from 'react-redux';
import QuantDropdown from './quantDropdown.jsx';

const QuantSelect = (props) => {
  const quant = useSelector((state) => state.cart.skuInfo.quantity);

  const getQuantities = (quantAvail) => {
    let quants = [];
    for (let x = 1; x <= quantAvail && x <= 15; x++) {
      quants.push({ value: x, label: x });
    }
    return quants;
  };

  if (quant) {
    return (
      <QuantDropdown options={getQuantities(quant)} disabled={false}/>
    );
  } else {
    return (
      <QuantDropdown options={{}} disabled/>
    );
  }
};

export default QuantSelect;
