import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRelated, fetchRelatedInfo } from '../relatedSlice.js';

import RelatedProductCard from '../relatedProductCard/relatedProductCard.jsx';

const RelatedProductsList = (props) => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const relatedList = useSelector((state) => state.related.related);
  const info = useSelector((state) => state.related.relatedInfo);


  useEffect(() => {
    console.log('producti', productId);
    dispatch(fetchRelated(productId))
      .then((result) => {
        result.payload.map((item) => {
          dispatch(fetchRelatedInfo(item));
        });
      }
      );
  }, [productId]);


  if (relatedList) {
    return (
      <div data-testid="relatedProductsList"> Related Products
        {info.map((product) => {
          return (
            <div>
              < RelatedProductCard productInfo={product}/>
            </div>
          );
        }
        )}
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default RelatedProductsList;

