import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleMoreQsClick } from './qaSlice.js';

import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Paper } from '@material-ui/core/';

import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import AddQModal from './AddQuestion.jsx';

//TRACKING
import { changeProductId, countMoreAnsweredQuestionsClick } from '../appSlice.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

const QuestionsAnswers = props => {
  const productId = useSelector((state) => state.app.productId);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');
  const [searchValueShort, setSearchValueShort] = useState('');

  const onInputChange = e => {
    if (e.target.value.length > 2) {
      setSearchValue(e.target.value);
    } else {
      setSearchValue('');
      setSearchValueShort(e.target.value);
    }
  };

  const onSearch = () => {
    let currentSearchValue = searchValueShort;
    setSearchValue(currentSearchValue);
  };

  return (
    <div data-testid="qa">
      <h2 style={{ marginLeft: 15 }}>QUESTIONS & ANSWERS</h2>
      <div>
        <Paper className={classes.paper}>
          <SearchBar onInputChange={onInputChange} onSearchClick={onSearch}/>
          <Grid>
            <Questions searchValue={searchValue}/>
          </Grid>
          <ButtonGroup>
            <Button
              aria-label="load more questions"
              data-testid="more-questions"
              variant="outlined"
              onClick={() => {
                dispatch(handleMoreQsClick());
                dispatch(countMoreAnsweredQuestionsClick());
              }}> MORE ANSWERED QUESTIONS </Button>
            <AddQModal />
          </ButtonGroup>
          <br />
          <br />
        </Paper>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
