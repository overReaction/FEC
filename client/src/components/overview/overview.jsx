import React from 'react';
import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';

const Overview = (props) => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();

  return (
    <div data-testid="overview"> Overview widget placeholder
      <h2> Overview </h2>
      <div data-testid="overview"> Overview widget placeholder.
      I can see the state change from the App level! Product Id: <b>{productId}</b>
      <div> I can also change state at the app level! </div>
      <button onClick={() => dispatch(changeProductId(18081))}> 18081 </button>
      <button onClick={() => dispatch(changeProductId(18082))}> 18082</button>
      <button onClick={() => dispatch(changeProductId(18083))}> 18083 </button>
      <ImageGallery />
      <ProductInformation />
      <StyleSelector />
      <AddToCart />
      </div>
    </div>
  );
};

export default Overview;
