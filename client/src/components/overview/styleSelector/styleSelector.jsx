import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { fetchStyleInfo } from './styleSelectorSlice.js';

const StyleSelector = (props) => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyleInfo(productId));
  });

  return (
    <div data-testid="style-selector"> Style selector placeholder</div>
  );
};

export default StyleSelector;
