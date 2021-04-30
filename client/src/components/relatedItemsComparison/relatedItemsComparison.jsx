import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import OutfitList from './outfitList/outfitList.jsx';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    maxWidth: 1500,
    minWidth: 40,
    padding: 0
  }
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary
  // }
}));

const RelatedItemsComparison = () => {
  const classes = useStyles();

  return (
    <div data-testid="related" className={classes.root} >
      <Grid container spacing={8} justify="center">
        <Grid item xs={11}>
          <h3>My Outfit</h3>
          <OutfitList />
        </Grid>
        <Grid item xs={11}>
          <h3>Related Products</h3>
          <RelatedProductsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default RelatedItemsComparison;
