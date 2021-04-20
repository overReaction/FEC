import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { changeProductId } from '../appSlice.js';

import { Grid } from '@material-ui/core/';

import Question from './Question.jsx';
import { fetchQuestions } from './qaSlice.js';

const Questions = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();
  const currentQuestions = useSelector((state) => state.qa.questions);

  useEffect(() => {
    dispatch(fetchQuestions(productId));
  }, [productId]);

  return (
    <div>
      <Grid>
        {currentQuestions.map(question => {
          return (
            <Question key={question.id} question={question}/>
          );
        })}
      </Grid>
    </div>
  );
};

export default Questions;
