import React, { useState, useEffect } from 'react';
import StarRating from '../starRating.jsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
    "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
      backgroundColor: "#D9D6CF"
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "green"
    }
  }
});
import Grid from '@material-ui/core/Grid';

const RatingsBreakdown = (props) => {
  const classes = useStyles();
  const ratings = useSelector((state) => state.app.reviewMetadata);
  const rating = useSelector((state) => state.app.rating);
  const numOfRatings = useSelector((state) => state.app.numOfRatings);
  console.log(ratings);
  console.log(numOfRatings);

  const [fiveStars, setFiveStars] = useState(0);
  const [fourStars, setFourStars] = useState(0);
  const [threeStars, setThreeStars] = useState(0);
  const [twoStars, setTwoStars] = useState(0);
  const [oneStars, setOneStars] = useState(0);

  useEffect(() => {
    if (ratings.ratings) {
      setFiveStars(parseInt(ratings.ratings[5], 10) / numOfRatings);
      setFourStars(parseInt(ratings.ratings[4], 10) / numOfRatings);
      setThreeStars(parseInt(ratings.ratings[3], 10) / numOfRatings);
      setTwoStars(parseInt(ratings.ratings[2], 10) / numOfRatings);
      setOneStars(parseInt(ratings.ratings[1], 10) / numOfRatings);
    }
  }, [ratings]);

  return (
    <>
      <h2>RATINGS AND REVIEWS</h2>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <h1>{rating}</h1>
        </Grid>
        <Grid item>
          <StarRating rating={rating}/>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            5 stars
          </Grid>
          <Grid item xs={9}>
            <LinearProgress classes={{ root: classes.root }} variant="determinate" value={fiveStars * 100}/>
          </Grid>
          <Grid item xs={1}>
            <span>({fiveStars * 100})</span>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            4 stars
          </Grid>
          <Grid item xs={9}>
            <LinearProgress classes={{ root: classes.root }} variant="determinate" value={fourStars * 100}/>
          </Grid>
          <Grid item xs={1}>
            <span>({fourStars * 100})</span>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            3 stars
          </Grid>
          <Grid item xs={9}>
            <LinearProgress classes={{ root: classes.root }} variant="determinate" value={threeStars * 100}/>
          </Grid>
          <Grid item xs={1}>
            <span>({threeStars * 100})</span>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            2 stars
          </Grid>
          <Grid item xs={9}>
            <LinearProgress classes={{ root: classes.root }} variant="determinate" value={twoStars * 100}/>
          </Grid>
          <Grid item xs={1}>
            <span>({twoStars * 100})</span>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            1 star
          </Grid>
          <Grid item xs={9}>
            <LinearProgress classes={{ root: classes.root }} variant="determinate" value={oneStars * 100}/>
          </Grid>
          <Grid item xs={1}>
            <span>({oneStars * 100})</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RatingsBreakdown;
