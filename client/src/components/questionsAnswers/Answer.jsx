import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeProductId } from '../appSlice.js';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}));

const Answer = props => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <span><b>A: </b>{`${props.answer.body} ${props.answer.answer_id}`}</span>
    </div>
  );
};

export default Answer;
