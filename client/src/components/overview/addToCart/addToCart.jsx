import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');
import { useSelector, useDispatch } from 'react-redux';
import { throwErr, reset } from './cartSlice.js';
import SizeSelect from './sizeSelect.jsx';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const sku = useSelector((state) => state.cart.sku);
  const err = useSelector((state) => state.cart.err);
  const quant = useSelector((state) => state.cart.skuInfo.quantity);
  const sizes = useSelector((state) => state.cart.sizes);

  const getQuantities = (quantAvail) => {
    let quants = [];
    for (let x = 1; x <= quantAvail && x <= 15; x++) {
      quants.push({ value: x, label: x });
    }
    return quants;
  };

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
        <div style={quant ? {} : { display: 'none' }}>
          <Select
            isClearable ={false}
            defaultValue={{ value: 1, label: '1' }}
            options={getQuantities(quant)} />
        </div>
        <div style={quant ? { display: 'none' } : {}}>
          <Select
            isDisabled={true}
            isClearable ={false}
            defaultValue={{ value: null, label: '-' }}
            options={{}} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Button
          style={sizes.length === 0 ? { display: 'none' } : {}}
          onClick={() => {
            if (err === null && !quant) {
              dispatch(throwErr(true));
            } else {
              addToCart(sku);
              dispatch(reset());
              sizeDropdown.value = { value: 'default', label: 'SELECT SIZE' };
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
