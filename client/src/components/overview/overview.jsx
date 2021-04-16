import React from 'react';
import ProductInformation from './productInformation/productInformation.jsx';
import ImageGallery from './imageGallery/imageGallery.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './addToCart/addToCart.jsx';

const Overview = (props) => {
  return (
    <div data-testid="overview"> Overview widget placeholder
      <ImageGallery />
      <ProductInformation />
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default Overview;
