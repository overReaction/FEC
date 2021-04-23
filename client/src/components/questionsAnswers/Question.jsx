/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { incrementHelpfulQuestionCount } from './qaSlice.js';
import { incrementHelpfulAnswerCount } from './qaSlice.js';

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
  const firstFourAnswers = props.answers[props.index].slice(0, 4);
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
          {firstFourAnswers.map((answer, index) => {
            const [answerHelpfulnessCount, setAnswerHelpfulnessCount] = useState(answer.helpfulness);
            const [helpfulAClicked, setHelpfulAClicked] = useState(false);
            if (index < 2) {
              return (
                <div key={answer.id} style={{ marginLeft: 10 }}>
                  <br />
                  <b>A:</b> {answer.body}
                  <br />
                  <span style={{ fontSize: 11 }}>
                    by {answer.answerer_name} &nbsp;
                    {new Date(answer.date).toString().slice(3, 16)} &nbsp; | &nbsp;
                    Helpful? <u>
                      {!helpfulAClicked ?
                        <a
                          onClick={() => {
                            dispatch(incrementHelpfulAnswerCount(answer.id));
                            setAnswerHelpfulnessCount(answerHelpfulnessCount + 1);
                            setHelpfulAClicked(true);
                          }}>Yes</a> : '   '
                      }
                    </u>
                    ({answerHelpfulnessCount}) &nbsp; | &nbsp; <u>
                    Report</u>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Paper>
  );
};

export default Question;
