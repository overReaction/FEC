import React from 'react';
import Grid from '@material-ui/core/Grid';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';

const Breakdown = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <RatingsBreakdown />
      </Grid>
      <Grid item xs={12}>
        <ProductBreakdown />
      </Grid>
    </Grid>
  );
};

export default Breakdown;
