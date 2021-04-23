import React from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { updateSku, updateSkuInfo } from './cartSlice.js';

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const sku = useSelector((state) => state.cart.sku);
  const quant = useSelector((state) => state.cart.skuInfo.quantity);
  let skus, sizes, quants;

  const getSizes = (skus) => {
    let sizes = [];
    Object.keys(skus).map((sku) => {
      sizes.push({ value: sku, label: skus[sku].size });
    });
    return sizes;
  };

  const getQuantities = (quantAvail) => {
    let quants = [];
    for (let x = 1; x <= quantAvail && x <= 15; x++) {
      quants.push({ value: x, label: x });
    }
    console.log(quants);
    return quants;
  };

  if (currentStyle) {
    skus = useSelector((state) => state.overview.currentStyle.skus);
    if (skus.null) {
      skus = null;
    } else {
      sizes = getSizes(skus);
    }
  } else {
    skus = useSelector((state) => state.overview.currentStyle);
  }

  return (
    <Grid data-testid="add-to-cart" container spacing={2}>
      <Grid item xs={6}>
        <div style={skus ? {} : { display: 'none' }}>
          <Select
            defaultValue={{ value: 'default', label: 'SELECT SIZE' }}
            options={sizes}
            onChange={(selectedItem) => {
              dispatch(updateSku(selectedItem.value));
              dispatch(updateSkuInfo(skus[selectedItem.value]));
            }}
          />
        </div>
        <div style={skus ? { display: 'none' } : {}}>
          <Select
            isDisabled={true}
            defaultValue={{ value: 'default', label: 'OUT OF STOCK' }}
            options={{}} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Button>Add to cart</Button>
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
        <Button>Add to outfit</Button>
      </Grid>
    </Grid>
  );
};

export default AddToCart;
