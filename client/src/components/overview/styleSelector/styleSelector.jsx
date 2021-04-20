import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
    return (
      <div data-testid="style-selector">Style: {currentStyle.name}
        <GridList cellHeight={75} cols={4}>
          {allStyles.map((style, index) => {
            return (
              <GridListTile xs={3} key={style.style_id} cols={1}>
                <img src={style.photos[1].thumbnail_url} />
              </GridListTile>
            );
          }
          )}
        </GridList>
      </div>
    );
  } else {
    return (<div data-testid="style-selector"> Loading </div>);
  }
};

export default StyleSelector;
