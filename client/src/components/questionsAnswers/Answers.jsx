/* eslint-disable react/prop-types */
import React from 'react';

import Answer from './Answer.jsx';


const Answers = (props) => {
  const firstTwoAnswers = props.answers[props.index].slice(0, 2);

  return (
    <div style={{ marginLeft: 10 }}>
      {firstTwoAnswers.map((answer, index) => {
        if (index < 2) {
          return <Answer key={answer.id} answer={answer} index={index}/>;
        }
      })}
    </div>
  );
};

export default Answers;
