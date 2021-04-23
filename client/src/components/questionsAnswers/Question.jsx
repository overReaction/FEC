/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Answers from './Answers.jsx';

import { incrementHelpfulQuestionCount } from './qaSlice.js';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  // const firstTwoAnswers = props.answers[props.index].slice(0, 2);
  const questionId = props.question.question_id;

  const [questionHelpfulnessCount, setQuestionHelpfulnessCount] = useState(props.question.question_helpfulness);
  const [helpfulQClicked, setHelpfulQClicked] = useState(false);

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: {props.question.question_body}</b></span>
        <span style={{ float: "right" }}>
          Helpful? <u>
            {!helpfulQClicked ?
              <a
                onClick={() => {
                  dispatch(incrementHelpfulQuestionCount(questionId));
                  setQuestionHelpfulnessCount(questionHelpfulnessCount + 1);
                  setHelpfulQClicked(true);
                }}>Yes</a> : '   '
            }
          </u>
            ({questionHelpfulnessCount}) &nbsp; | &nbsp; <u>Add Answer</u>
        </span>
        <div>
          <Answers answers={props.answers} index={props.index}/>
        </div>
      </div>
    </Paper>
  );
};

export default Question;
