/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import StarRating from '../../starRating.jsx';
import { removeFromOutfit } from '../outfitSlice.js';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
}));

const OutfitCard = ({ productInfo, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOutfitClick = () => {
    console.log(index);
    dispatch(removeFromOutfit(index));
  };

  return (
    <div data-testid="outfitCard">
      <GridListTile >
        <img alt={`outfit photo ${index}`} src={productInfo.photo} style={{ height: '100%', maxHeight: 400, width: 'auto' }}/>
        <GridListTileBar
          title={productInfo.name}
          subtitle={<div>
            <span>{`$${productInfo.default_price}`}</span>
            <StarRating rating={productInfo.ratings}/></div>}
          actionIcon={
            <IconButton aria-label="remove from outfit" onClick={() => handleOutfitClick()}>
              <ClearIcon className={classes.icon}/>
            </IconButton>
          }
          className={classes.titleBar}
        />
      </GridListTile>
    </div>
  );
};

export default OutfitCard;

