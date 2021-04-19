import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Answers from './Answers.jsx';

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


const Question = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q:</b> Why??</span>
        <Answers />
      </div>
    </Paper>
  );
};


export default Question;
