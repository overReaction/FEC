import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from './ratingsReviewsSlice.js';
import AddReviewModal from './addReview.jsx';

const ReviewActions = (props) => {
  const dispatch = useDispatch();
  const numOfReviews = useSelector((state) => state.app.reviews.length);
  const reviewsCount = useSelector((state) => state.reviews.reviewsCount);

  if (numOfReviews > 2) {
    return (
      <div>
        <Button
          variant="outlined"
          size="medium"
          onClick={() => dispatch(loadReviews())}
        >
          More Reviews
        </Button>
        {" "}
        <AddReviewModal/>
      </div>
    );
  } else if (numOfReviews === reviewsCount || numOfReviews <= 2) {
    return (
      <Button
        variant="outlined"
        size="medium"
        endIcon={<AddIcon />}
      >
        Add Review
      </Button>
    );
  }
};

export default ReviewActions;
