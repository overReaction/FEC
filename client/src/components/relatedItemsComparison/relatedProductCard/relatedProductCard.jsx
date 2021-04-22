import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { changeProductId } from '../../appSlice.js';
// import { fetchProductInfo } from '../../appSlice.js';

const RealtedProductCard = (props) => {
  // const productId = useSelector((state) => state.app.productId); //Accesses the store to retrieve current state
  // const dispatch = useDispatch(); //Dispatch an action to the store to update state

  //Use Effect is similiar to component did mount
  // useEffect(() => {
  //   dispatch(fetchProductInfo(productId));
  // });
  // const relatedProductIndex = props.index;
  // useEffect(() => {
  //   dispatch(fetchProductInfo(relatedProductIndex));
  // }, [productId]);

  return (
    <div data-testid="relatedProductCard">
      <CssBaseline />
      RelatedProductCard placeholder
      {/* <button onClick={() => dispatch(changeProductId(props.index))}> `{props.index}` </button> */}
      <span>
        {props.productInfo.name}
      </span>
    </div>
  );
};

export default RealtedProductCard;

