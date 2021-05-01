import React from 'react';
import Grid from '@material-ui/core/Grid';

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
    <Grid item container style={{ minWidth: 350, maxWidth: 400, flexGrow: 0, flexShrink: 1 }} spacing={1}>
      <RatingsBreakdownLoadable />
      <ProductBreakdownLoadable />
    </Grid>
  );
};

export default Breakdown;
