import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReviewSortSearch from './reviewSortSearch.jsx';
import Review from './review.jsx';
import Grid from '@material-ui/core/Grid';
import ReviewActions from './reviewActions.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const ReviewList = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        Ratings and reviews reviewList component placeholder
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ReviewSortSearch />
          </Grid>
          <Grid item xs={12}>
            <Review />
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
