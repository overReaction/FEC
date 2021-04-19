import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import ProductBreakdown from './productBreakdown.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const Breakdown = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        Ratings and reviews breakdown component placeholder
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <RatingsBreakdown />
          </Grid>
          <Grid item xs={12}>
            <ProductBreakdown />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Breakdown;
