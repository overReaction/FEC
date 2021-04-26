import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchRelated, fetchRelatedStyleInfo } from '../relatedSlice.js';
// import { changeProductId } from '../../appSlice.js';
// import { fetchProductInfo } from '../../appSlice.js';

const RealtedProductCard = ({ productInfo }) => {
  // const productId = useSelector((state) => state.app.productId); //Accesses the store to retrieve current state
  // const dispatch = useDispatch(); //Dispatch an action to the store to update state
  // const dispatch = useDispatch();
  // const style = useSelector((state) => state.related.relatedStyleInfo);
  // console.log(style);
  // const related = useSelector((state) => state.related.related);

  // Use Effect is similiar to component did mount
  // useEffect(() => {
  //   related.map((item) => {
  //     dispatch(fetchRelatedStyleInfo(item));
  //   });
  // }, [productId]);

  return (
    <div data-testid="relatedProductCard">
      <CssBaseline />
      RelatedProductCard placeholder
      {/* {style.map((item) => {
        if (item.product_id === props.productInfo.id) {
          return (
            <div>
              <span>{props.productInfo.name}</span>
              <span>{style[0].results.photos[0].thumbnail_url}</span>
            </div>
          );
        } else {
          return (
            <div>
              <span>{props.productInfo.name}</span>
            </div>
          );
        }
      }
      )} */}
      <span>{productInfo.name}</span>
      <img src={productInfo.photo}/>
      {/* <span>{props.styleInfo[0].results[0].original_price}</span> */}
    </div>
  );
};

export default RealtedProductCard;

