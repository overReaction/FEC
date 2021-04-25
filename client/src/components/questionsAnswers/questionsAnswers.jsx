import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../appSlice.js';
import { handleMoreQsClick } from './qaSlice.js';

import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Paper } from '@material-ui/core/';

import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import AddQModal from './AddQuestion.jsx';

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
      <span style={{ marginLeft: 15 }}>QUESTIONS & ANSWERS</span>
      <div>
        <Paper className={classes.paper}>
          <SearchBar onInputChange={onInputChange} onSearchClick={onSearch}/>
          <Grid>
            <Questions searchValue={searchValue}/>
          </Grid>
          <ButtonGroup>
            <Button
              data-testid="moreQsButton"
              variant="outlined"
              onClick={() => dispatch(handleMoreQsClick())}> MORE ANSWERED QUESTIONS </Button>
            <AddQModal />
          </ButtonGroup>
          <br />
          <br />
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
