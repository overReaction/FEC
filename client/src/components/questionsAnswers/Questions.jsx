import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeProductId } from '../appSlice.js';

import { Grid } from '@material-ui/core/';

import Question from './Question.jsx';
import { fetchQuestions } from './qaSlice.js';

const Questions = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();
  const currentQuestions = useSelector((state) => state.qa.data);
  // console.log('QUESTIONS:', currentQuestions);

  let answers = currentQuestions.map(question => {
    return Object.values(question.answers);
  });
  // console.log('ANSWERS:', answers);


  useEffect(() => {
    dispatch(fetchQuestions(productId));
  }, [productId]);

  return (
    <div>
      <Grid>
        {currentQuestions.map((question, index) => {
          return (
            <Question
              key={`${question.question_id}`}
              index={index}
              question={question}
              answers={answers}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Questions;
