import React from 'react';
import ReviewList from './reviewList.jsx';
import Breakdown from './breakdown.jsx';
import Grid from '@material-ui/core/Grid';

const RatingsReviews = (props) => {
  return (
    <div style={{ padding: '1em' }}>
      <div data-testid="RatingsReviews" id="RatingsReviews">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Breakdown />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ReviewList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RatingsReviews;
