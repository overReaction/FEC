import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core/';
import { ButtonGroup } from '@material-ui/core/';
import Modal from "@material-ui/core/Modal";

import { fetchQuestions } from './qaSlice.js';

function getModalStyle () {
  return {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    top: '20%',
    left: '35%',
    width: '20%',
    outline: 0
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #333333",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function AddQModal () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'nickname') {
      setNickname(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'question') {
      setQuestion(e.target.value);
    }
  };

  const onSubmitClick = () => {
    if (question.length && nickname.length && email.length) {
      axios.post('/api/?endpoint=qa/questions', {
        body: question,
        name: nickname,
        email: email,
        product_id: productId
      })
        .then(() => dispatch(fetchQuestions(productId)))
        .then(
          setEmail(''),
          setQuestion(''),
          setNickname(''),
          handleClose()
        );
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="ask-a-question-modal">Ask A Question</h2>
      <p>(all fields required)</p>
      <form onChange={handleInputChange}>
        Your Nickname: <input name="nickname"/>
        <br/>
        Your Email: <input name="email"/>
        <br/>
        Your Question: <input style={{ height: 200, width: 200 }} name="question"/>
        <br/>
        <br/>
        <ButtonGroup>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitClick}>Submit</Button>
        </ButtonGroup>
      </form>
    </div>
  );

  return (
    <div>
      <Button data-testid="addQbutton" variant="outlined" onClick={handleOpen}>
        ADD A QUESTION +
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
