import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';

import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 450,
    minWidth: 410,
    padding: 0
  }
}));

const Overview = (props) => {
  const classes = useStyles();
  const productInfo = useSelector((state) => state.app.productInfo);

  return (
    <div data-testid="overview">
      <Grid container spacing={3} style={{ maxHeight: 700 }}>
        <Grid item container xs={7} justify="flex-end" style={{ maxHeight: 600 }}>
          <ImageGallery />
        </Grid>
        <Grid item container xs={5} direction="column" classes={{ root: classes.root }}>
          <Grid item>
            <ProductInformation />
          </Grid>
          <Grid item>
            <StyleSelector />
          </Grid>
          <Grid item>
            <AddToCart />
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <div> <b>{productInfo.slogan}</b></div>
            {productInfo.description}
          </Grid>
          <Grid item xs={4}>
            Features to go here
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
