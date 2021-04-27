/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Answer from './Answer.jsx';
import { Grid } from '@material-ui/core/';


const Answers = (props) => {
  const [answers] = useState(props.answers[props.index]);
  const [moreAnswersClicked, setMoreAnswersClicked] = useState(false);

  const onMoreAnswersClick = () => {
    setMoreAnswersClicked(!moreAnswersClicked);
  };

  if (!moreAnswersClicked) {
    return (
      <>
        <Grid
          style={{ marginLeft: 10 }}>
          {answers.map((answer, index) => {
            if (index < 2) {
              return <Answer key={answer.id} answer={answer} index={index}/>;
            }
          })}
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onMoreAnswersClick}
            style={{ border: 'none',
              backgroundColor: 'white',
              color: '#777777',
              marginTop: 5 }}>
            <u>Show more answers</u>
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Grid style={{
          marginLeft: 10,
          maxHeight: '50vh',
          boxSizing: 'border-box',
          padding: '1em',
          overflowX: 'hidden',
          overflowY: 'auto' }}>
          {answers.map((answer, index) => {
            return <Answer key={answer.id} answer={answer} index={index}/>;
          }
          )}
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onMoreAnswersClick}
            style={{ border: 'none',
              backgroundColor: 'white',
              color: '#777777' }}>
            <u>collapse answers</u>
          </button>
        </div>
      </>
    );
  }
};

export default Answers;
