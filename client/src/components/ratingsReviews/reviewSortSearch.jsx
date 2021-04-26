import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Select from 'react-select';

import { setSort } from './ratingsReviewsSlice';
import { fetchReviewsNewest, fetchReviewsHelpful, fetchReviewsRelevant } from '../appSlice.js';

const ReviewSortSearch = (props) => {
  const numOfReviews = useSelector((state) => state.app.reviews.length);
  const productId = useSelector((state) => state.app.productId);
  const sort = useSelector((state) => state.reviews.sortBy);
  const dispatch = useDispatch();

  return (
    <div>
      <Grid container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <h2>{numOfReviews} reviews, sorted by </h2>
        </Grid>
        <Grid item xs={2}>
          <Select
            value={sort}
            options={[
              { value: 'newest', label: 'newest' },
              { value: 'relevant', label: 'relevant' },
              { value: 'helpful', label: 'helpful' }
            ]}
            onChange={(selected) => {
              dispatch(setSort(selected));
              if (selected.value === 'newest') {
                dispatch(fetchReviewsNewest(productId));
              } else if (selected.value === 'relevant') {
                dispatch(fetchReviewsRelevant(productId));
              } else if (selected.value === 'helpful') {
                dispatch(fetchReviewsHelpful(productId));
              }
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewSortSearch;
