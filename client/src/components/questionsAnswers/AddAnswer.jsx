/* eslint-disable react/prop-types */
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
    textAlign: 'right',
    outline: 0
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '20%',
    margin: '0 auto',
    width: 370,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #333333",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function AddAModal (props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');

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
    if (e.target.name === 'answer') {
      setAnswer(e.target.value);
    }
  };

  const onSubmitClick = (questionId) => {
    if (answer.length && nickname.length && email.length) {
      axios.post(`/api/?endpoint=qa/questions/${questionId}/answers`, {
        body: answer,
        name: nickname,
        email: email,
        photos: ['']
      })
        .then(() => dispatch(fetchQuestions(productId)))
        .then(
          setEmail(''),
          setAnswer(''),
          setNickname(''),
          handleClose()
        );
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="ask-a-question-modal" style={{ textAlign: 'center' }}>Answer A Question</h2>
      <p style={{ textAlign: 'center' }}>(all fields required)</p>
      <form onChange={handleInputChange}>
        Your Nickname: <input name="nickname" style={{ width: 200 }}/>
        <br/>
        Your Email: <input name="email" style={{ width: 200 }}/>
        <br/>
        Your Answer: <input style={{ height: 200, width: 200 }} name="answer"/>
        <br/>
        <br/>
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => onSubmitClick(props.questionId)}>Submit</Button>
        </ButtonGroup>
      </form>
    </div>
  );

  return (
    <div>
      <button
        className="clickable"
        data-testid="addAnswerButton"
        onClick={handleOpen}
        style={{ border: 'none', backgroundColor: 'white', color: '#555555' }}>
        Add Answer
      </button>
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
