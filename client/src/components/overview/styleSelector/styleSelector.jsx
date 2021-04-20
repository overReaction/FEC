import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { fetchStyleInfo, selectStyle } from '../overviewSlice.js';

const StyleSelector = (props) => {
  const productId = useSelector((state) => state.app.productId);
  const allStyles = useSelector((state) => state.overview.styles);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyleInfo(productId));
  }, [productId]);

  if (currentStyle) {
    return (<div data-testid="style-selector"> Select Style Placeholder {currentStyle.name} </div>);
  } else {
    return (<div data-testid="style-selector"> Select Style Placeholder </div>);
  }
};

export default StyleSelector;
