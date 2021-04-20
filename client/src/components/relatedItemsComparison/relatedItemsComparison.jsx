import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import OutfitCard from './outfitCard/outfitCard.jsx';
import OutfitList from './outfitList/outfitList.jsx';
// import RelatedProductCard from './relatedProductCard/relatedProductCard.jsx';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

import { useSelector } from 'react-redux';

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

const RelatedItemsComparison = (props) => {
  const classes = useStyles();
  const productInfo = useSelector((state) => state.app.productInfo);

  return (
    <div data-testid="related" className={classes.root}> Related items and comparison widget placeholder
      <Grid container spacing={3}>
        <Grid item container xs={8}>
          <OutfitList />
        </Grid>
        <Grid item container xs={8}>
          <RelatedProductsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default RelatedItemsComparison;
