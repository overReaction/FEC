import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Answer from './Answer.jsx';
import { fetchAnswers } from './qaSlice.js';

const Answers = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnswers(props.question.question_id));
  }, [currentQuestions]);

  return (
    <div>
      <Grid>
        {answers.map((answer, index) => {
          return answer.map(a => {
            return (
              <Answer key={`${a.id} ${index}`} answer={a}/>
            );
          });
        })}
      </Grid>
    </div>
  );
};

export default Answers;
