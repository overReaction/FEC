import React from 'react';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { } from './cartSlice.js';

const AddToCart = (props) => {
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Select
          defaultValue={{ value: 'default', label: 'SELECT SIZE' }}
          options={[{ value: 'placeholder', label: 'placeholder' }]} />
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  );
};

export default AddToCart;
