import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


const RealtedProductCard = ({ productInfo }) => {
  return (
    <div data-testid="relatedProductCard">
      <CssBaseline />
      <span>{productInfo.name}</span>
      <img src={productInfo.photo}/>
    </div>
  );
};

export default RealtedProductCard;

