import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { fetchStyleInfo, selectStyle } from '../overviewSlice.js';

const useStyles = makeStyles({
  root: {
    borderRadius: 100 + '%',
    height: 100,
    width: 100,
    margin: 'auto'
  }
});

const StyleSelector = (props) => {
  const classes = useStyles();
  const productId = useSelector((state) => state.app.productId);
  const allStyles = useSelector((state) => state.overview.styles);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStyleInfo(productId));
  }, [productId]);

  if (currentStyle) {
    return (
      <Paper className={classes.paper}>
        <div data-testid="style-selector">Style: {currentStyle.name}
          <GridList cellHeight={100} cols={4}>
            {allStyles.map((style, index, allStyles) => {
              var url;
              if (style.photos[0].thumbnail_url) {
                url = style.photos[0].thumbnail_url;
              } else {
                url = "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80";
              }
              return (
                <GridListTile
                  xs={3}
                  key={style.style_id}
                  cols={1}
                  onClick={() => dispatch(selectStyle(style))}
                  classes={{ tile: classes.root }}
                >
                  <img src={url} style={{ objectFit: 'cover' }}/>
                </GridListTile>
              );
            }
            )}
          </GridList>
        </div>
      </Paper>
    );
  } else {
    return (<div data-testid="style-selector"> Loading </div>);
  }
};

export default StyleSelector;
