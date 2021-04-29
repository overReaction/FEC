import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  },
  icon: {
    fontSize: "inherit",
    color: "grey"
  }
}));

const StarRating = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating value={props.rating} precision={0.25} readOnly emptyIcon={<StarBorderIcon className={classes.icon}/>}/>
    </div>
  );
};

export default StarRating;
