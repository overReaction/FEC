import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Answer from './Answer.jsx';
import { fetchAnswers } from './qaSlice.js';

const Answers = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();
  const currentAnswers = useSelector((state) => state.qa.answers);
  const currentQuestions = useSelector((state) => state.qa.questions);
  // console.log('currentA:', currentAnswers);

  useEffect(() => {
    dispatch(fetchAnswers(props.questionId));
  }, [currentQuestions]);

  return (
    <div>
      <Grid>
        {currentAnswers.map((answer, index) => {
          return (
            <Answer key={`${answer.answer_id}`} answer={answer}/>
          );
        })}
      </Grid>
    </div>
  );
};

export default Answers;
