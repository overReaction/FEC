import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import StarRating from '../../starRating.jsx';
import { fetchReviewMetadata } from '../../appSlice.js';

const ProductInformation = (props) => {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const productInfo = useSelector((state) => state.app.productInfo);
  const productId = useSelector((state) => state.app.productId);
  const rating = useSelector((state) => state.app.rating);

  useEffect(() => {
    dispatch(fetchReviewMetadata(productId));
  }, [productId]);

  return (
    <div data-testid="product-info">
      <Grid container spacing={3} direction="column">
        <Grid item>
          <StarRating rating={rating}/>
        </Grid>
        <Grid item data-testid="product-name" >
          <span style={{ fontSize: 14, lineHeight: 100 + '%' }}> <b>CATEGORY ></b> {productInfo.category} <br/></span>
          <span style={{ fontSize: 40, lineHeight: 75 + '%' }}> {productInfo.name} </span>
        </Grid>
        <Grid item data-testid="price">
          {(currentStyle) && currentStyle.sale_price ?
            <div>
              <span style ={{ color: 'red' }}>
                <b>SALE </b> ${currentStyle.sale_price} &nbsp;
              </span>
              <span style={{ textDecoration: "line-through" }}>
               ${productInfo.default_price}
              </span>
            </div> :
            <span> ${productInfo.default_price}</span>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInformation;
