/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Answer from './Answer.jsx';


const Answers = (props) => {
  const [answers] = useState(props.answers[props.index]);
  const [moreAnswersClicked, setMoreAnswersClicked] = useState(false);

  const onMoreAnswersClick = () => {
    setMoreAnswersClicked(!moreAnswersClicked);
  };

  if (!moreAnswersClicked) {
    return (
      <>
        <div style={{ marginLeft: 10 }}>
          {answers.map((answer, index) => {
            if (index < 2) {
              return <Answer key={answer.id} answer={answer} index={index}/>;
            }
          })}
        </div>
        <button
          onClick={onMoreAnswersClick}
          style={{ border: 'none',
            backgroundColor: 'white',
            color: '#666666' }}>
          <u>show more answers</u>
        </button>
      </>
    );
  } else {
    return (
      <>
        <div style={{ marginLeft: 10 }}>
          {answers.map((answer, index) => {
            return <Answer key={answer.id} answer={answer} index={index}/>;
          }
          )}
        </div>
        <button
          onClick={onMoreAnswersClick}
          style={{ border: 'none',
            backgroundColor: 'white',
            color: '#666666' }}>
          <u>collapse answers</u>
        </button>
      </>
    );
  }
};

export default Answers;
