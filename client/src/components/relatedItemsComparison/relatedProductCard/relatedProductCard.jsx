import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

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

const RealtedProductCard = ({ productInfo }) => {
  const classes = useStyles();
  return (
    <div data-testid="relatedProductCard">
      <GridListTile >
        <img src={productInfo.photo} style={{ height: '100%', maxHeight: 400, width: 'auto', objectFit: 'cover' }}/>
        <GridListTileBar
          title={productInfo.name}
          subtitle={`$${productInfo.default_price}`}
          actionIcon={
            <IconButton >
              <StarBorderIcon className={classes.icon}/>
            </IconButton>
          }
          className={classes.titleBar}
        />
      </GridListTile>
    </div>
  );
};

export default RealtedProductCard;

