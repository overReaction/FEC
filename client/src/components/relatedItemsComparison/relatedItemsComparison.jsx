import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import StickyHeadTable from './comparisonModal/comparisonModal.jsx';
import OutfitList from './outfitList/outfitList.jsx';
import RelatedProductsList from './relatedProductsList/relatedProductsList.jsx';

// import { useSelector } from 'react-redux';

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

const RelatedItemsComparison = () => {
  const classes = useStyles();

  return (
    <div data-testid="related" className={classes.root}> Related items and comparison widget placeholder
      <Grid container spacing={3}>
        <Grid item container xs={12}>
          <OutfitList />
        </Grid>
        <Grid item container xs={11}>
          <RelatedProductsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default RelatedItemsComparison;
