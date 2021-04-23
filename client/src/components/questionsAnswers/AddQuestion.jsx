import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core/';
import { ButtonGroup } from '@material-ui/core/';
import Modal from "@material-ui/core/Modal";

// function rand () {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle () {
  // const top = 50 + rand();
  // const left = 50 + rand();

  return {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    top: '20%',
    left: '35%',
    width: '20%'
    // transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function AddQModal () {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="ask-a-question-modal">Ask A Question</h2>
      <p>(all fields required)</p>
      <form>
        Your Nickname: <input name="nickname"/>
        <br/>
        Your Email: <input name="email"/>
        <br/>
        Your Question: <input style={{ height: 200, width: 200 }} name="question"/>
        <br/>
        <br/>
        <ButtonGroup>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </form>
    </div>
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
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
