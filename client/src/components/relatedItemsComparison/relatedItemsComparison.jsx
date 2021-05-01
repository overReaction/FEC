import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import OutfitList from './outfitList/outfitList.jsx';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    maxWidth: 1500,
    padding: theme.spacing(2)
  },
  title: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    color: 'black'
  },
  appBar: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'white'
  }
}));

const RelatedItemsComparison = () => {
  const classes = useStyles();

  return (
    <div data-testid="related" >
      <Grid container spacing={8} justify="center" >
        <Grid item container xs={11} className={classes.root}>
          <Grid item xs={11} >
            <AppBar position="static" className={classes.appBar}>
              <Toolbar variant="dense">
                <Typography variant="h5" className={classes.title}>
                  MY OUTFIT
                </Typography>
              </Toolbar>
            </AppBar>
            <OutfitList />
          </Grid>
        </Grid>
        <Grid item container xs={11} className={classes.root}>
          <Grid item xs={11} >
            <AppBar position="static" className={classes.appBar}>
              <Toolbar variant="dense">
                <Typography variant="h5" className={classes.title}>
                  RELATED PRODUCTS
                </Typography>
              </Toolbar>
            </AppBar>
            <RelatedProductsList />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RelatedItemsComparison;
