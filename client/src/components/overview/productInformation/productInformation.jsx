import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

const ProductInformation = (props) => {
  const classes = useStyles();
  const productId = useSelector((state) => state.app.productId);
  const productInfo = useSelector((state) => state.app.productInfo);
  const dispatch = useDispatch();

  return (
    <div data-testid="product-info">
      <Paper className={classes.paper}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            Star rating
          </Grid>
          <Grid item>
            {productInfo.category}
          </Grid>
          <Grid item>
            {productInfo.name}
          </Grid>
          <Grid item>
            ${productInfo.default_price}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductInformation;
