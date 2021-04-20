import React from 'react';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

const Review = (props) => {
  const classes = useStyles();
  return (
    <div className="review">
      <Paper className={classes.paper}>
        <Rating name="half-rating-read" size="small" defaultValue={3.5} precision={0.5} readOnly />
        <h3>results[i].summary: "I am liking these glasses"</h3>
        <p>results[i].body: "They are very dark. But that's good because I'm in very sunny spots"</p>
        <h5>If recommended, display check icon + "I recommend this product" here</h5>
        <h5>If response, display response text here</h5>
        <p>Helpful? <a href="#">Yes</a> | <a href="#">Report</a></p>
      </Paper>
    </div>
  );
};

export default Review;
