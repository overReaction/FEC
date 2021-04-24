import React from 'react';
import StarRating from '../starRating.jsx';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1em'
  }
}));

const Review = ({ review }) => {
  const classes = useStyles();
  const dateOptions = {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  };

  let date = new Date(review.date);
  let dateFormat = new Intl.DateTimeFormat('en-us', dateOptions);
  let dateString = dateFormat.format(date);

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <StarRating rating={review.rating}/>
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: 'right' }}>
            {review.reviewer_name} | {dateString}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <h3>{review.summary.slice(0, 61)}</h3>
          <p>{review.body}</p>
        </Grid>
        {review.recommend === true ?
          <Grid item xs={12} container alignItems="center" justify="flex-start">
            <Grid item>
              <CheckCircleOutlineIcon/>
            </Grid>
            <Grid item>
              <h4>I recommend this product</h4>
            </Grid>
          </Grid> :
          <span/>}
        {review.response ?
          <Grid item xs={12} container>
            <div style= {{ backgroundColor: '#D3D3D3' }}>
              <div><b>Response from seller:</b></div>
              <div>{review.response}</div>
            </div>
          </Grid> :
          <span/>
        }
        <Grid item xs={12}>
          Was this review helpful? &nbsp;
          <a href="#">Yes</a> ({review.helpfulness}) | <a href="#">No</a> ({review.nonhelpfulness || 0})
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Review;
