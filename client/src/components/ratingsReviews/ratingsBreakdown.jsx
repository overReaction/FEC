import React from 'react';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

const RatingsBreakdown = (props) => {
  const classes = useStyles();
  return (
    <div className="overall-rating">
      <Paper className={classes.paper}>
        <Typography variant="h3">
          3.5
          <Rating name="half-rating-read" size="small" defaultValue={3.5} precision={0.5} readOnly />
        </Typography>
        <div className="star-links">
          <a href="#" >5 stars</a><br></br>
          <a href="#" >4 stars</a><br></br>
          <a href="#" >3 stars</a><br></br>
          <a href="#" >2 stars</a><br></br>
          <a href="#" >1 star</a><br></br>
        </div>
      </Paper>
    </div>
  );
};

export default RatingsBreakdown;
