/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { useSelector, useDispatch } from 'react-redux';

// import Answers from './Answers.jsx';

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
  //console.log('PROPSERS:', props.answers);

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: </b>{props.question.question_body}</span>
        <span style={{ float: "right" }}>
          Helpful? <u>Yes</u> ({props.question.question_helpfulness}) | <u>Add Answer</u>
        </span>
        <div>
          A: {props.answers[0].body}
        </div>
        {/* <Answers question={props.question}/> */}
      </div>
    </Paper>
  );
};


export default Question;
