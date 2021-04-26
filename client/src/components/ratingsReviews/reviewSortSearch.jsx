import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

// Static data for testing
const options = [
  {
    priority: 'relevance'
  },
  {
    priority: 'most recent'
  },
  {
    priority: 'most helpful'
  }
];


const ReviewSortSearch = (props) => {
  const reviews = useSelector((state) => state.app.reviews);
  const numOfReviews = useSelector((state) => state.app.reviews.length);

  return (
    <div>
      <Grid container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <h3>{numOfReviews} reviews, sorted by </h3>
        </Grid>
        <Grid item>
          <TextField
            id="select-priority"
            select
            // label= {options[0].priority}
            defaultValue={options[0].priority}
            // onChange={handleChange}
            // helperText="choose sort method"
          >
            {options.map((option) => (
              <MenuItem key ={option.priority} value={option.priority}>{option.priority}</MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReviewSortSearch;
