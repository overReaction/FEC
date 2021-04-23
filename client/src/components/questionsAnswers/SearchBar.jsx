/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    display: 'flexGrow',
    flex: 1,
    border: 'solid 1px',
    borderColor: '#777777',
    height: 50
  },
  iconButton: {
    padding: 10
  }
}));

export default function SearchBar (props) {
  const classes = useStyles();

  return (
    <div component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={props.onInputChange}
      />
      <IconButton type="submit" onClick={props.onSearchClick} className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}
