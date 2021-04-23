import Overview from './overview/overview.jsx';
import RatingsReviews from './ratingsReviews/ratingsReviews.jsx';
import QuestionsAnswers from './questionsAnswers/questionsAnswers.jsx';
import RelatedItemsComparison from './relatedItemsComparison/relatedItemsComparison.jsx';
import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId, fetchProductInfo } from './appSlice.js';
import ExpandedView from './overview/imageGallery/galleryExpanded.jsx';
import MagnifiedView from './overview/imageGallery/galleryMagnified.jsx';
import Grid from '@material-ui/core/Grid';

var App = () => {
  const productId = useSelector((state) => state.app.productId); //Accesses the store to retrieve current state
  const viewExpanded = useSelector((state) => state.overview.expanded);
  const viewMagnified = useSelector((state) => state.overview.magnified);
  const dispatch = useDispatch(); //Dispatch an action to the store to update state

  //Use Effect is similiar to component did mount
  useEffect(() => {
    document.title = `Let's OverReact!`;
    dispatch(fetchProductInfo(productId));
  });

  if (viewMagnified) {
    return (
      <React.Fragment>
        <CssBaseline />
        <MagnifiedView/>
      </React.Fragment>
    );
  } else if (viewExpanded) {
    return (
      <React.Fragment>
        <CssBaseline />
        <ExpandedView/>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <CssBaseline />
        <Grid container direction="column">
          <Grid item>
            <h2> App </h2>
            <div> Try clicking one of these buttons to update the product id
              (imagine you were clicking a thumbnail for a related item)</div>
            <button onClick={() => dispatch(changeProductId(18078))}> 18078 </button>
            <button onClick={() => dispatch(changeProductId(18079))}> 18079 </button>
            <button onClick={() => dispatch(changeProductId(18080))}> 18080 </button>
          </Grid>
          <Grid item>
            <Overview />
          </Grid>
          <Grid item>
            <RelatedItemsComparison />
          </Grid>
          <Grid item>
            <QuestionsAnswers />
          </Grid>
          <Grid item>
            <RatingsReviews />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default App;
