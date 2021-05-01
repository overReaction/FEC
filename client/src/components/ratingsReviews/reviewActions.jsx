import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from './ratingsReviewsSlice.js';

import Loadable from 'react-loadable';
import Loading from '../loading.jsx';

const AddReviewModalLoadable = Loadable({
  loader: () => import('./addReview.jsx'),
  loading: Loading
});

const ReviewActions = (props) => {
  const dispatch = useDispatch();
  const numOfReviews = useSelector((state) => state.app.reviews.length);
  const reviewsCount = useSelector((state) => state.reviews.reviewsCount);

  if (numOfReviews > 2) {
    return (
      <div>
        <Button
          aria-label="load more reviews"
          variant="outlined"
          size="medium"
          onClick={() => dispatch(loadReviews())}
        >
          More Reviews
        </Button>
        {" "}
        <AddReviewModalLoadable/>
      </div>
    );
  } else if (numOfReviews === reviewsCount || numOfReviews <= 2) {
    return (
      <AddReviewModalLoadable/>
    );
  }
};

export default ReviewActions;
