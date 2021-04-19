import Overview from './overview/overview.jsx';
import RatingsReviews from './ratingsReviews/ratingsReviews.jsx';
import QuestionsAnswers from './questionsAnswers/questionsAnswers.jsx';
import RelatedItemsComparison from './relatedItemsComparison/relatedItemsComparison.jsx';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId, fetchProductInfo } from './appSlice.js';


var App = () => {
  const productId = useSelector((state) => state.app.productId); //Accesses the store to retrieve current state
  const dispatch = useDispatch(); //Dispatch an action to the store to update state

  //Use Effect is similiar to component did mount
  useEffect(() => {
    document.title = `Let's OverReact!`;
    dispatch(fetchProductInfo(productId));
  });

  return (
    <div>
      <CssBaseline />
      <h2> App </h2>
      <div> Here is our current product number: <b>{productId}</b>  </div>
      <div> Try clicking one of these buttons to update the product id
        (imagine you were clicking a thumbnail for a related item)</div>
      <button onClick={() => dispatch(changeProductId(18078))}> 18078 </button>
      <button onClick={() => dispatch(changeProductId(18079))}> 18079 </button>
      <button onClick={() => dispatch(changeProductId(18080))}> 18080 </button>
      <Overview />
      <RatingsReviews />
      <QuestionsAnswers />
      <RelatedItemsComparison />
    </div>
  );
};

export default App;
