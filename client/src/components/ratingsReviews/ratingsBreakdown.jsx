import React, { useState, useEffect } from 'react';
import StarRating from '../starRating.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { seeAllReviews, adjustFilter, clearFilter } from './ratingsReviewsSlice.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//TRACKING
import { countSortBy5StarsClick, countSortBy1StarClick} from '../appSlice.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
    "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
      backgroundColor: "#D9D6CF"
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "green"
    }
  },
  hover: {
    '&:hover': {
      backgroundColor: '#e1f0e5',
      cursor: 'pointer'
    }
  }
});


const RatingsBreakdown = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const ratings = useSelector((state) => state.app.reviewMetadata);
  const rating = useSelector((state) => state.app.rating);
  const numOfRatings = useSelector((state) => state.app.numOfRatings);
  const numOfReviews = useSelector((state) => state.app.reviews.length);
  const filters = useSelector((state) => state.reviews.filter);

  const [fiveStars, setFiveStars] = useState(0);
  const [fourStars, setFourStars] = useState(0);
  const [threeStars, setThreeStars] = useState(0);
  const [twoStars, setTwoStars] = useState(0);
  const [oneStars, setOneStars] = useState(0);

  const handleRatingClick = (rating) => {
    dispatch(seeAllReviews(numOfReviews));
    dispatch(adjustFilter(rating));
  };

  const calculatePercentRecommended = () => {
    let recommend = parseInt(ratings.recommended.true, 10);
    let dontRecommend = parseInt(ratings.recommended.false, 10);
    return (recommend / (recommend + dontRecommend)) * 100;
  };

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
      <Grid container spacing={1}>
        <Grid container item alignItems="center" spacing={2}>
          <Grid item>
            <h1>{rating.toFixed(2)}</h1>
          </Grid>
          <Grid item>
            <StarRating rating={rating}/>
          </Grid>
          <Grid item>
            ({numOfRatings})
          </Grid>
        </Grid>
        {ratings.recommended ?
          <Grid item xs={12}>
            {Math.floor(calculatePercentRecommended())}% of reviews recommend this product.
          </Grid> :
          <span/>
        }
        <Grid container item spacing={1}>
          <Grid item container alignItems="center" spacing={1} className={classes.hover}
            onClick={() => {
              handleRatingClick(5);
              dispatch(countSortBy5StarsClick());
            }}>
            <Grid item xs={2}>
              5 stars
            </Grid>
            <Grid item xs={9}>
              <LinearProgress classes={{ root: classes.root }} variant="determinate" value={fiveStars * 100}/>
            </Grid>
            <Grid item xs={1}>
              <span>({fiveStars * numOfRatings})</span>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" spacing={1} className={classes.hover}
            onClick={() => handleRatingClick(4)}
          >
            <Grid item xs={2}>
              4 stars
            </Grid>
            <Grid item xs={9}>
              <LinearProgress classes={{ root: classes.root }} variant="determinate" value={fourStars * 100}/>
            </Grid>
            <Grid item xs={1}>
              <span>({fourStars * numOfRatings})</span>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" spacing={1} className={classes.hover}
            onClick={() => handleRatingClick(3)}
          >
            <Grid item xs={2}>
              3 stars
            </Grid>
            <Grid item xs={9}>
              <LinearProgress classes={{ root: classes.root }} variant="determinate" value={threeStars * 100}/>
            </Grid>
            <Grid item xs={1}>
              <span>({threeStars * numOfRatings})</span>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" spacing={1} className={classes.hover}
            onClick={() => handleRatingClick(2)}
          >
            <Grid item xs={2}>
              2 stars
            </Grid>
            <Grid item xs={9}>
              <LinearProgress classes={{ root: classes.root }} variant="determinate" value={twoStars * 100}/>
            </Grid>
            <Grid item xs={1}>
              <span>({twoStars * numOfRatings})</span>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" spacing={1} className={classes.hover}
            onClick={() => {
              handleRatingClick(1);
              dispatch(countSortBy1StarClick());
            }}>
            <Grid item xs={2}>
              1 star
            </Grid>
            <Grid item xs={9}>
              <LinearProgress classes={{ root: classes.root }} variant="determinate" value={oneStars * 100}/>
            </Grid>
            <Grid item xs={1}>
              <span>({oneStars * numOfRatings})</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          {filters.length > 0 ?
            <Grid item container alignItems="center">
              <Grid item xs={9}>
                Filtered by star ratings: &nbsp;
                {filters.map((number, index) => {
                  if (index === filters.length - 1) {
                    return (
                      <span key={number}>{number}</span>
                    );
                  }
                  return (
                    <span key={number}>{number}, </span>
                  );
                })}
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => dispatch(clearFilter())}
                >
                 Clear all
                </Button>
              </Grid>
            </Grid> :
            <span/>
          }
        </Grid>
      </Grid>
    </>
  );
};

export default RatingsBreakdown;
