import React from 'react';
import Grid from '@material-ui/core/Grid';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';

import Loadable from 'react-loadable';
import Loading from '../loading.jsx';

const RatingsBreakdownLoadable = Loadable({
  loader: () => import('./ratingsBreakdown.jsx'),
  loading: Loading
});

const ProductBreakdownLoadable = Loadable({
  loader: () => import('./productBreakdown.jsx'),
  loading: Loading
});

const Breakdown = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <RatingsBreakdownLoadable />
      </Grid>
      <Grid item xs={12}>
        <ProductBreakdownLoadable />
      </Grid>
    </Grid>
  );
};

export default Breakdown;
