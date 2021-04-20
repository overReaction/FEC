import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

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
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}> 
        <Typography variant="h5" direction="row">
          248 reviews, sorted by 
          <TextField
            id="select-priority"
            select
            label= {options[0].priority}
            // value={currency}
            // onChange={handleChange}
            helperText="select sort method from menu"
          >
            {options.map((option) => (
              <MenuItem value={options.priority}></MenuItem>
            ))}
          </TextField>
        </Typography>
      </Paper>
    </div>
  );
};

export default ReviewSortSearch;
