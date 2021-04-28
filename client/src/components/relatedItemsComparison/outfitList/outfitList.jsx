import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import OutfitCard from '../outfitCard/outfitCard.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap'
    // Promote the list into her own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)'
  }
}));

const OutfitList = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const outfitList = useSelector((state) => state.outfit.outfitObjects);


  if (outfitList.length > 0) {
    return (
      <div data-testid="outfitList" className={classes.root}>
        <GridList className={classes.gridList} >
          {outfitList.map((product, index) => {
            return (
              < OutfitCard key={product.id} productInfo={product} index={index}/>
            );
          }
          )}
        </GridList>
      </div>
    );
  } else {
    return (
      <div data-testid="outfitList">
        <h3>Add some items to your outfit!</h3>
      </div>
    );
  }
};

export default OutfitList;

