import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Loadable from 'react-loadable';
import Loading from '../loading.jsx';

const BreakdownLoadable = Loadable({
  loader: () => import('./breakdown.jsx'),
  loading: Loading
});

const ReviewListLoadable = Loadable({
  loader: () => import('./reviewList.jsx'),
  loading: Loading
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    flexShrink: 1,
    maxWidth: 450,
    minWidth: 410,
    padding: theme.spacing(2)
  },
  title: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    color: 'white'
  },
  appBar: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'black'
  }
}));

const RatingsReviews = (props) => {
  const classes = useStyles();
  return (
    <div
      data-testid="RatingsReviews"
      id="RatingsReviews"
      style={{ padding: '0 3em 3em 3em' }}>
      <Grid container spacing={1}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <Typography variant="h5" className={classes.title}>
              RATINGS AND REVIEWS
            </Typography>
          </Toolbar>
        </AppBar>
        <BreakdownLoadable />
        <ReviewListLoadable />
      </Grid>
    </div>
  );
};

export default RatingsReviews;
