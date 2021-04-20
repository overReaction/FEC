import React from 'react';
import Paper from '@material-ui/core/Paper';
import ReviewSortSearch from './reviewSortSearch.jsx';
import Review from './review.jsx';
import Grid from '@material-ui/core/Grid';
import ReviewActions from './reviewActions.jsx';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

const ReviewList = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        reviewList component
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ReviewSortSearch />
          </Grid>
          <Grid item xs={12}>
            <Review />
            <Review />
          </Grid>
          <Grid item xs={12}>
            <ReviewActions />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ReviewList;
