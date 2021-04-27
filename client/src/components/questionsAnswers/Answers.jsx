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
        <div style={{ marginLeft: 10 }}>
          {answers.map((answer, index) => {
            return <Answer key={answer.id} answer={answer} index={index}/>;
          }
          )}
        </div>
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
