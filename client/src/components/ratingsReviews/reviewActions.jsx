import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { loadReviews } from './ratingsReviewsSlice.js';

const ReviewActions = (props) => {
  const dispatch = useDispatch();
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
      <Button
        variant="outlined"
        size="medium"
        endIcon={<AddIcon />}
      >
        Add Review
      </Button>
    </div>
  );
};

export default ReviewActions;
