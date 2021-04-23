import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 450,
    minWidth: 410,
    padding: 0
  }
}));

const Overview = (props) => {
  const classes = useStyles();
  const productInfo = useSelector((state) => state.app.productInfo);
  console.log(productInfo);

  return (
    <div data-testid="overview" style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item container spacing={2} wrap="wrap-reverse">
          <Grid item justify="center" container xs={7}>
            <ImageGallery />
          </Grid>
          <Grid item container xs={5} spacing={2} direction="column" classes={{ root: classes.root }}>
            <Grid item>
              <ProductInformation />
            </Grid>
            <Grid item>
              <StyleSelector />
            </Grid>
            <Grid item>
              <AddToCart />
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <span><b>SHARE > </b></span>
                </Grid>
                <Grid>
                  <IconButton href="#" style={{ color: "black" }}>
                    <FacebookIcon/>
                  </IconButton>
                  <IconButton href="#" style={{ color: "black" }}>
                    <TwitterIcon/>
                  </IconButton>
                  <IconButton href="#" style={{ color: "black" }}>
                    <PinterestIcon/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item spacing={2} container xs={12} wrap="wrap">
          <Grid item xs={7} style={{ border: '1px solid black' }}>
            <div style={{ fontSize: `1.5em` }}> <b>{productInfo.slogan}</b></div>
            {productInfo.description}
          </Grid>
          <Grid item xs={5} style={{ border: '1px solid black' }}>
            <Grid item container>
              <Grid item xs={12}>
                <div style={{ fontSize: `1em` }}> <b>FEATURES > </b></div>
              </Grid>
              {productInfo.features ?
                productInfo.features.map((feature) => {
                  return (
                    <Grid item container alignItems="center" xs={12} style={{ paddingLeft: '1em' }}>
                      <Grid item>
                        <CheckCircleOutlineIcon/>
                      </Grid>
                      <Grid item>
                        {feature.feature} - {feature.value}
                      </Grid>
                    </Grid>
                  );
                }) :
                <div>
                  Loading
                </div>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
