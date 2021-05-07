import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleMoreQsClick } from './qaSlice.js';

import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import AddQModal from './AddQuestion.jsx';

//TRACKING
import { countMoreAnsweredQuestionsClick } from '../appSlice.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  title: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    color: 'white'
  },
  appBar: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'black'
  }
}));

const QuestionsAnswers = props => {
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
    <div data-testid="qa" style={{ padding: '3em' }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h5" className={classes.title}>
              QUESTIONS AND ANSWERS
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '1em' }}>
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
      </div>
    </div>
  );
};

export default QuestionsAnswers;
