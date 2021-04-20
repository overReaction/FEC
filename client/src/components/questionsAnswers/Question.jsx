import React from 'react';
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
  console.log(props);

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: </b>{props.question.question_body}</span>
        <span style={{ float: "right" }}>Helpful? <u>Yes</u> (num) | <u>Add Answer</u></span>
        <Answers />
      </div>
    </Paper>
  );
};


export default Question;
