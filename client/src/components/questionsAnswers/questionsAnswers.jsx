import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';

import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Paper } from '@material-ui/core/';

import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
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
          <ButtonGroup aria-label="outlined primary button group">
            <Button onClick={() => console.log('mas')}> MORE ANSWERED QUESTIONS </Button>
            <Button onClick={() => console.log('+')}> ADD A QUESTION + </Button>
          </ButtonGroup>
          <br></br>
          <ButtonGroup aria-label="outlined primary button group">
            <Button onClick={() => dispatch(changeProductId(18084))}> 18084 </Button>
            <Button onClick={() => dispatch(changeProductId(18085))}> 18085 </Button>
            <Button onClick={() => dispatch(changeProductId(18086))}> 18086 </Button>
          </ButtonGroup>
          <div> Current Product ID: {productId}</div>
        </Paper>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
