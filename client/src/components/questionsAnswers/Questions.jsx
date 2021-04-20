import React from 'react';
// import { useSelector } from 'react-redux';
// import { changeProductId } from '../appSlice.js';
import { Grid } from '@material-ui/core/';

import Question from './Question.jsx';

const Questions = props => {
  return (
    <div>
      <Grid>
        <Question />
        <Question />
        <Question />
      </Grid>
    </div>
  );
};

export default Questions;
