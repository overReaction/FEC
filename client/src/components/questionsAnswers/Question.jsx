import React from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {
  return (
    <>
      <div data-testid="Question">---- Question</div>
      <AddAnswer />
      <AnswerList />
    </>
  );
};

export default Question;
