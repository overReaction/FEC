import React, { useState } from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core/';
import { ButtonGroup } from '@material-ui/core/';
import Modal from "@material-ui/core/Modal";

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

export default function AddAModal (props) {
  const classes = useStyles();

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
      console.log('nickname:', nickname);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      console.log('Email:', email);
    }
    if (e.target.name === 'answer') {
      setAnswer(e.target.value);
      console.log('Answer:', answer);
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
        .then(
          setEmail(''),
          setAnswer(''),
          setNickname(''),
          handleClose('')
        );
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="ask-a-question-modal">Answer A Question</h2>
      <p>(all fields required)</p>
      <form onChange={handleInputChange}>
        Your Nickname: <input name="nickname"/>
        <br/>
        Your Email: <input name="email"/>
        <br/>
        Your Answer: <input style={{ height: 200, width: 200 }} name="answer"/>
        <br/>
        <br/>
        <ButtonGroup>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => onSubmitClick(props.questionId)}>Submit</Button>
        </ButtonGroup>
      </form>
    </div>
  );

  return (
    <div>
      <p onClick={handleOpen}>
        Add Answer
      </p>
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
