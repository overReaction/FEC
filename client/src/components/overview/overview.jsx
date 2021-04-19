import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';

const Overview = (props) => {
  const productId = useSelector((state) => state.app.productId);
  const productInfo = useSelector((state) => state.app.productInfo);
  const dispatch = useDispatch();

  return (
    <div data-testid="overview"> Overview widget placeholder
      <ImageGallery />
      <ProductInformation />
      <StyleSelector />
      <AddToCart />
      <h3>{productInfo.name}</h3>
      <div><span> ${productInfo.default_price} - </span>{productInfo.description}</div>
    </div>
  );
};

export default Overview;
