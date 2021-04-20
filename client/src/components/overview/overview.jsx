import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';

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

const Overview = (props) => {
  const classes = useStyles();
  const productInfo = useSelector((state) => state.app.productInfo);
  // const dispatch = useDispatch();

  return (
    <div data-testid="overview" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item container xs={8}>
            <ImageGallery />
          </Grid>
          <Grid item container xs={4} direction="column">
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
      </Paper>
    </div>
  );
};

export default Overview;
