/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
  const firstFourAnswers = props.answers[props.index].slice(0, 4);

  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: {props.question.question_body}</b></span>
        <span style={{ float: "right" }}>
          Helpful? <u>Yes</u> ({props.question.question_helpfulness}) &nbsp; | &nbsp; <u>Add Answer</u>
        </span>
        <div>
          {firstFourAnswers.map((answer, index) => {
            if (index < 2) {
              return (
                <div key={answer.id} style={{ marginLeft: 10 }}>
                  <br />
                  <b>A:</b> {answer.body}
                  <br />
                  <span style={{ fontSize: 11 }}>
                    by {answer.answerer_name} &nbsp;
                    {new Date(answer.date).toString().slice(3, 16)} &nbsp; | &nbsp; Helpful? <u>
                    Yes</u> ({props.question.question_helpfulness}) &nbsp; | &nbsp; <u>
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
