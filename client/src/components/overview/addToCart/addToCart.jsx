import React from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');
import { useSelector, useDispatch } from 'react-redux';
import { throwErr, updateSizeDropDownDisplay, updateQuantDropDownDisplay, updateSkuInfo } from './cartSlice.js';
import SizeSelect from './sizeSelect.jsx';
import QuantSelect from './quantSelect.jsx';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const sku = useSelector((state) => state.cart.sku);
  const err = useSelector((state) => state.cart.err);
  const sizes = useSelector((state) => state.cart.sizes);

  const addToCart = (sku) => {
    axios.post(`/api/?endpoint=cart`, {
      sku_id: sku
    });
  };

  return (
    <Grid data-testid="add-to-cart" container spacing={2}>
      <Grid item xs={12}
        style={err === null || err === false ? { display: 'none' } : {}}>
        <span>Please select a size.</span>
      </Grid>
      <Grid item xs={6}>
        <SizeSelect />
      </Grid>
      <Grid item xs={6}>
        <QuantSelect />
      </Grid>
      <Grid item xs={6}>
        <Button
          style={sizes.length === 0 ? { display: 'none' } : {}}
          onClick={() => {
            if (err === null) {
              dispatch(throwErr(true));
            } else {
              addToCart(sku);
              dispatch(updateSizeDropDownDisplay({ value: 'default', label: 'SELECT SIZE' }));
              dispatch(updateQuantDropDownDisplay({ value: null, label: '-' }));
              dispatch(updateSkuInfo({}));
            }
          }}
        >Add to cart</Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          style={sizes.length === 0 ? { display: 'none' } : {}}
        >Add to outfit</Button>
      </Grid>
    </Grid>
  );
};

export default AddToCart;
