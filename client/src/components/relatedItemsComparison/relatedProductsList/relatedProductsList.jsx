import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRelated } from '../relatedSlice.js';

import RelatedProductCard from '../relatedProductCard/relatedProductCard.jsx';

const RelatedProductsList = (props) => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const relatedList = useSelector((state) => state.related.related);

  useEffect(() => {
    dispatch(fetchRelated(productId));
  }, [productId]);

  if (relatedList) {
    return (
      <div data-testid="relatedProductsList"> Related Products
        {/* {relatedList.map((product, index) => {
          return (
            <div>
              < RelatedProductCard key={`${product} ${index}` + Math.random()} index={product}/>
            </div>
          );
        }
        )} */}
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default RelatedProductsList;
