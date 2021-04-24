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
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h6" direction="row">
              248 reviews, sorted by
            </Typography>
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
      </Paper>
    </div>
  );
};

export default ReviewSortSearch;
