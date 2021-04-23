import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { updateSku, throwErr, updateDropDownDisplay, reset, setSizes } from './cartSlice.js';


const SizeSelect = (props) => {
  const dispatch = useDispatch();

  const err = useSelector((state) => state.cart.err);
  const sizes = useSelector((state) => state.cart.sizes);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const dropDownDisplay = useSelector((state) => state.cart.sizeDropDownDisplay);

  let skus, availableSizesForStyle;

  const getSizes = (skus) => {
    let sizes = [];
    Object.keys(skus).map((sku) => {
      sizes.push({ value: sku, label: skus[sku].size });
    });
    return sizes;
  };

  //If we have a current style, store the available skus for that style in state
  if (currentStyle) {
    skus = useSelector((state) => state.overview.currentStyle.skus);
    //If skus.null exists, then there are no available styles for purchase
    if (skus.null) {
      skus = null;
    } else {
    //Otherwise, generate an array of objects to display in the size dropdown
      availableSizesForStyle = getSizes(skus);
    }
  } else {
  //If there is no current style, then skus are null (as is the current style value)
    skus = useSelector((state) => state.overview.currentStyle);
  }

  //Reset the values in cartSlice if selected style changes
  useEffect(() => {
    dispatch(reset());
  }, [currentStyle]);

  //Whenever the available skus changes, re-render and update the available sizes for that style
  useEffect(() => {
    if (skus) {
      dispatch(setSizes(availableSizesForStyle));
    }
  }, [skus]);


  if (sizes.length === 0) { //If there are no sizes available
    return (
      <Select
        value={{ value: 'default', label: 'OUT OF STOCK' }}
        isDisabled={true}
        options={{}} />
    );
  } else if (err === true) { //If the user pressed add to cart w/o a selected size
    return (
      <Select
        value={dropDownDisplay}
        menuIsOpen={true}
        options={sizes}
        onChange={(selected) => {
          dispatch(updateDropDownDisplay(selected));
          dispatch(updateSku(selected.value));
          dispatch(throwErr(false));
        }}
      />
    );
  } else { //Normal display if none of the above
    return (
      <Select
        value={dropDownDisplay}
        options={sizes}
        onChange={(selected) => {
          dispatch(updateDropDownDisplay(selected));
          dispatch(updateSku(selected.value));
          dispatch(throwErr(false));
        }}
      />
    );
  }
};

export default SizeSelect;
