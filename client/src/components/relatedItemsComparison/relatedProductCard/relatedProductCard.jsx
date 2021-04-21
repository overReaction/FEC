import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId, fetchProductInfo } from '../../appSlice.js';

const RealtedProductCard = (props) => {
  const productId = useSelector((state) => state.app.productId); //Accesses the store to retrieve current state
  const dispatch = useDispatch(); //Dispatch an action to the store to update state

  //Use Effect is similiar to component did mount
  useEffect(() => {
    dispatch(fetchProductInfo(productId));
  });


  return (
    <div data-testid="relatedProductCard">
      <CssBaseline />
      RelatedProductCard placeholder
      <button onClick={() => dispatch(changeProductId(props.product))}> `{props.product}` </button>
      {/* <span>
        {props.product}
      </span> */}
    </div>
  );
};

export default RealtedProductCard;

