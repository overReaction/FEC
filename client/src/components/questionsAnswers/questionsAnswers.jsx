import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionsAnswers = (props) => {
  return (
    <>
      <div data-testid="QuestionsAnswers">Questions and answers widget placeholder</div>
      <QuestionList />
      <AddQuestion />
    </>

  );
};

export default QuestionsAnswers;
