import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRelated, fetchRelatedInfo, fetchRelatedStyleInfo } from '../relatedSlice.js';

import RelatedProductCard from '../relatedProductCard/relatedProductCard.jsx';

const RelatedProductsList = (props) => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const relatedList = useSelector((state) => state.related.related);
  const info = useSelector((state) => state.related.relatedInfo);
  const style = useSelector((state) => state.related.relatedStyleInfo);
  console.log(style);


  useEffect(() => {
    dispatch(fetchRelated(productId))
      .then((result) => {
        // console.log(result);
        result.payload.map((item) => {
          dispatch(fetchRelatedInfo(item))
            .then((result) => {
              // console.log(result);
              dispatch(fetchRelatedStyleInfo(result.payload.id))
            });
        });
      }
      );
  }, [productId]);


  if (relatedList) {
    return (
      <div data-testid="relatedProductsList"> Related Products
        {info.map((product) => {
          // style.map((item) => {
          //   if (product.id === item.product_id) {
          //     console.log('match: ', item.product_id);
          //   }
          // });
          return (
            <div>
              {/* < RelatedProductCard productInfo={product} styleInfo={style}/> */}
              <span>{product.id}</span>
            </div>
          );
        }
        )},
        {style.map((product) => {
          return (
            <div>
              <span>{product.product_id}</span>
            </div>
          );
        })
        }
        {/* {info.map((product) => {
          style.map((item) => {
            if (item.product_id === product.id) {
              return (
                <div>
                  <span>{product.name}</span>
                  <span>{item.product_id}</span>
                </div>
              );
            }
          });
        })} */}
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default RelatedProductsList;

