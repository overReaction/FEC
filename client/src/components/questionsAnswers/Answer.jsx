/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementHelpfulAnswerCount } from './qaSlice';

const Answer = (props) => {
  const dispatch = useDispatch();

  const [answerHelpfulnessCount, setAnswerHelpfulnessCount] = useState(props.answer.helpfulness);
  const [helpfulAClicked, setHelpfulAClicked] = useState(false);

  return (
    <div style={{ marginLeft: 10 }}>
      <br />
      <b>A:</b> {props.answer.body}
      <br />
      <span style={{ fontSize: 11 }}>
        by {props.answer.answerer_name} &nbsp;
        {new Date(props.answer.date).toString().slice(3, 16)} &nbsp; | &nbsp; Helpful? &nbsp;
        {!helpfulAClicked ?
          <u
            onClick={() => {
              dispatch(incrementHelpfulAnswerCount(props.answer.id));
              setAnswerHelpfulnessCount(answerHelpfulnessCount + 1);
              setHelpfulAClicked(true);
            }}>Yes
          </u> : <span>&nbsp;</span>}
          ({answerHelpfulnessCount}) &nbsp; | &nbsp;
        <u>Report</u>
      </span>
    </div>
  );
};


export default Answer;
