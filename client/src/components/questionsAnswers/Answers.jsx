/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Answer from './Answer.jsx';


const Answers = (props) => {
  // const answers = props.answers[props.index];
  const [answers, setAnswers] = useState(props.answers[props.index]);
  // console.log(firstTwoAnswers);
  console.log('ANSWERS:', answers);

  return (
    <div style={{ marginLeft: 10 }}>
      {answers.map((answer, index) => {
        if (index < 2) {
          return <Answer key={answer.id} answer={answer} index={index}/>;
        }
      })}
    </div>
  );
};

export default Answers;
