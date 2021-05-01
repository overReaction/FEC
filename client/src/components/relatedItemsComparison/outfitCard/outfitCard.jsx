/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeProductId } from '../../appSlice.js';
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
      <GridListTile style={{
        position: 'relative',
        minWidth: '20px',
        maxWidth: '700px',
        minHeight: '20px',
        maxHeight: '450px'
      }}>
        <img alt={`outfit photo ${index}`}
          src={productInfo.photo}
          style={{
            position: 'top',
            width: '100% !important',
            maxHeight: '400px',
            maxWidth: '664px',
            overflow: 'hidden',
            height: '100%'
          }}
          onClick={() => {
            dispatch(changeProductId(productInfo.id));
          }}
        />
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

