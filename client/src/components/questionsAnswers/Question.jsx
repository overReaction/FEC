/* eslint-disable react/prop-types */
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

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: </b>{`${props.question.question_body} ${props.question.question_id}`}</span>
        <span style={{ float: "right" }}>
          Helpful? <u>Yes</u> ({props.question.question_helpfulness}) | <u>Add Answer</u>
        </span>
        <Answers question={props.question}/>
      </div>
    </Paper>
  );
};


export default Question;
