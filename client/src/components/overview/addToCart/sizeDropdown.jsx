import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';

import {
  updateSku,
  throwErr,
  updateSizeDropDownDisplay,
  updateQuantDropDownDisplay,
  updateSkuInfo } from './cartSlice.js';

const SizeDropdown = (props) => {
  const dispatch = useDispatch();
  const dropDownDisplay = useSelector((state) => state.cart.sizeDropDownDisplay);

  if (props.isOpen === true) {
    return (
      <>
        <InputLabel id="sizeSelect">Select size</InputLabel>
        <Select
          aria-label="size selector"
          aria-required
          labelId="sizeSelect"
          value={dropDownDisplay}
          menuIsOpen
          isDisabled={props.isDisabled}
          options={props.options}
          onChange={(selected) => {
            dispatch(updateSizeDropDownDisplay(selected));
            dispatch(updateQuantDropDownDisplay({ value: 1, label: '1' }));
            dispatch(updateSku(selected.value));
            dispatch(updateSkuInfo(props.skus[selected.value]));
            dispatch(throwErr(false));
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <InputLabel id="sizeSelect">Select size</InputLabel>
        <Select
          aria-label="size selector"
          aria-required
          labelId="sizeSelect"
          value={props.isDisabled === true ? { value: 'default', label: 'OUT OF STOCK' } : dropDownDisplay}
          isDisabled={props.isDisabled}
          options={props.options}
          onChange={(selected) => {
            dispatch(updateSizeDropDownDisplay(selected));
            dispatch(updateQuantDropDownDisplay({ value: 1, label: '1' }));
            dispatch(updateSku(selected.value));
            dispatch(updateSkuInfo(props.skus[selected.value]));
            dispatch(throwErr(false));
          }}
        />
      </>
    );
  }
};

export default SizeDropdown;
