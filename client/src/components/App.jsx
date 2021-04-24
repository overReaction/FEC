//React dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

//Redux
import { changeProductId, fetchProductInfo } from './appSlice.js';

//Components
import Overview from './overview/overview.jsx';
import RatingsReviews from './ratingsReviews/ratingsReviews.jsx';
import QuestionsAnswers from './questionsAnswers/questionsAnswers.jsx';
import RelatedItemsComparison from './relatedItemsComparison/relatedItemsComparison.jsx';
import ExpandedView from './overview/imageGallery/galleryExpanded.jsx';
import MagnifiedView from './overview/imageGallery/galleryMagnified.jsx';

//App component
var App = () => {
  const productId = useSelector((state) => state.app.productId);
  const viewExpanded = useSelector((state) => state.overview.expanded);
  const viewMagnified = useSelector((state) => state.overview.magnified);
  const dispatch = useDispatch();

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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
};

export default App;
