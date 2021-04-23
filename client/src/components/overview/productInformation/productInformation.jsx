import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import StarRating from '../../starRating.jsx';
import { fetchReviewMetadata, fetchReviews } from '../../appSlice.js';

const ProductInformation = (props) => {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const productInfo = useSelector((state) => state.app.productInfo);
  const productId = useSelector((state) => state.app.productId);
  const rating = useSelector((state) => state.app.rating);
  const numOfReviews = useSelector((state) => {
    if (Object.keys(state.app.reviews).length > 0) {
      return state.app.reviews.results.length;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    dispatch(fetchReviewMetadata(productId));
    dispatch(fetchReviews(productId));
  }, [productId]);

  return (
    <div data-testid="product-info">
      <Grid container spacing={3} direction="column">
        <Grid
          item
          container
          alignItems="center"
          style={numOfReviews === 0 ? { visibility: 'hidden' } : {}}
        >
          <Grid item>
            <StarRating rating={rating}/>
          </Grid>
          <Grid item>
            &nbsp; <a href="#RatingsReviews">Read all {numOfReviews} reviews</a>
          </Grid>
        </Grid>
        <Grid item>
          <span
            data-testid="product-category"
            style={{ fontSize: 14, lineHeight: 100 + '%' }}
          > <b>CATEGORY ></b> {productInfo.category} <br/>
          </span>
          <span
            data-testid="product-name"
            style={{ fontSize: 40, lineHeight: 75 + '%' }}
          > {productInfo.name}
          </span>
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
