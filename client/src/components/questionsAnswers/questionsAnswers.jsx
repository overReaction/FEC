import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import ButtonGroup from '@material-ui/core/InputBase';
import Button from '@material-ui/core/InputBase';
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const QuestionsAnswers = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div data-testid="qa">
      <h2>Questions & Answers</h2>
      <div>
        <Paper className={classes.paper}>
          <SearchBar />
          <Grid>
            <Questions />
          </Grid>
          {/* <div> Current Product ID: {productId}</div>
          <button onClick={() => dispatch(changeProductId(18084))}> 18084 </button>
          <button onClick={() => dispatch(changeProductId(18085))}> 18085</button>
          <button onClick={() => dispatch(changeProductId(18086))}> 18086 </button> */}
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

        </Paper>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
