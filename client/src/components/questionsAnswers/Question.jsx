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
  let firstFour = props.answers[props.index].slice(0, 4);


  return (
    <Paper className={classes.paper}>
      <div>
        <span><b>Q: </b>{props.question.question_body}</span>
        <span style={{ float: "right" }}>
          Helpful? <u>Yes</u> ({props.question.question_helpfulness}) | <u>Add Answer</u>
        </span>
        <div>
          {firstFour.map((answer) => {
            return (
              <div key={answer.id}>
                <br />
                <b>&nbsp; &nbsp; A:</b> {answer.body}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </Paper>
  );
};


export default Question;
