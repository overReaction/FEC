import React from 'react';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

const AddToCart = (props) => {
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  let sizes = { value: null, label: 'OUT OF STOCK' };
  let skus;

  const getSizes = (skus) => {
    let sizes = [];
    Object.values(skus).map((sku) => {
      sizes.push({ value: sku.size, label: sku.size });
    });
    return sizes;
  };

  if (currentStyle !== null) {
    skus = useSelector((state) => state.overview.currentStyle.skus);
    sizes = getSizes(skus);
    return (
      <Grid data-testid="add-to-cart" container spacing={2}>
        <Grid item xs={6}>
          <Select
            defaultValue={{ value: 'default', label: 'SELECT SIZE' }}
            options={sizes} />
        </Grid>
        <Grid item xs={6}>
          <Button>Add to cart</Button>
        </Grid>
        <Grid item xs={6}>
          <Select
            isClearable ={false}
            defaultValue={{ value: 'default', label: 'QUANTITY' }}
            options={[{ value: 'placeholder', label: 'placeholder' }]} />
        </Grid>
        <Grid item xs={6}>
          <Button>Add to outfit</Button>
        </Grid>
      </Grid>
    );
  } else {
    skus = useSelector((state) => state.overview.currentStyle);
    return (
      <Grid data-testid="add-to-cart" container spacing={2}>
        <Grid item xs={6}>
          <Select
            defaultValue={{ value: 'default', label: 'SELECT SIZE' }}
            options={{}} />
        </Grid>
        <Grid item xs={6}>
          <Button>Add to cart</Button>
        </Grid>
        <Grid item xs={6}>
          <Select
            isClearable ={false}
            defaultValue={{ value: 'default', label: 'QUANTITY' }}
            options={[{ value: 'placeholder', label: 'placeholder' }]} />
        </Grid>
        <Grid item xs={6}>
          <Button>Add to outfit</Button>
        </Grid>
      </Grid>
    );
  }
};

export default AddToCart;
