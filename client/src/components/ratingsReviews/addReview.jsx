import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core/';
import { ButtonGroup } from '@material-ui/core/';
import Modal from "@material-ui/core/Modal";
import AddIcon from '@material-ui/icons/Add';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function getModalStyle () {
  return {
    display: 'flex',
    flexDirection: 'column',
    top: '20%',
    left: '10%',
    width: '80%',
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

export default function AddReviewModal () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.app.productId);
  const productInfo = useSelector((state) => state.app.productInfo);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [overallRating, setRating] = useState(0);
  const [recommended, setRecommended] = useState("yes");
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [email, setEmail] = useState('');
  let ratingToolTip;

  if (overallRating === 1) {
    ratingToolTip = 'Poor';
  } else if (overallRating === 2) {
    ratingToolTip = 'Fair';
  } else if (overallRating === 3) {
    ratingToolTip = 'Average';
  } else if (overallRating === 4) {
    ratingToolTip = 'Good';
  } else if (overallRating === 5) {
    ratingToolTip = 'Great';
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeRecommended = (event) => {
    setRecommended(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const handleChangeWidth = (event) => {
    setWidth(event.target.value);
  };

  const handleChangeComfort = (event) => {
    setComfort(event.target.value);
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
      <h1>Write Your Review</h1>
      <h3>About {productInfo.name}</h3>
      <FormControl>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <FormLabel component="overallRating">*Overall Rating</FormLabel>
          </Grid>
          <Grid item>
            <Rating
              name="overallRating"
              defaultValue={0}
              value={overallRating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </Grid>
          <Grid item>
            <span>{ratingToolTip}</span>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <FormLabel component="recommended">*Do you recommend this product?</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="recommended" name="recommended" value={recommended} onChange={handleChangeRecommended}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <FormLabel component="recommended">*Size?</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="size" name="size" value={size} onChange={handleChangeSize}>
              <FormControlLabel value="1" control={<Radio />} label="A size too small" labelPlacement="bottom"/>
              <FormControlLabel value="2" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="3" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="4" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="5" control={<Radio />} label="A size too big" labelPlacement="bottom"/>
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <FormLabel component="recommended">*Width?</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="width" name="width" value={width} onChange={handleChangeWidth}>
              <FormControlLabel value="1" control={<Radio />} label="Too narrow" labelPlacement="bottom"/>
              <FormControlLabel value="2" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="3" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="4" control={<Radio />} label="" labelPlacement="bottom"/>
              <FormControlLabel value="5" control={<Radio />} label="Too wide" labelPlacement="bottom"/>
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <FormLabel component="recommended">*Comfort?</FormLabel>
          </Grid>
          <Grid item>
            <RadioGroup row aria-label="comfort" name="comfort" value={comfort} onChange={handleChangeComfort}>
              <Grid container spacing={1} alignItems="flexStart">
                <Grid item xs={2}>
                  <FormControlLabel value="1" control={<Radio />} label="Uncomfortable" labelPlacement="bottom"/>
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="2" control={<Radio />} label="Slightly uncomfortable" labelPlacement="bottom"/>
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="3" control={<Radio />} label="Ok" hiddenLabel={!comfort === "3"} labelPlacement="top"/>
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="4" control={<Radio />} label="Comfortable" labelPlacement="bottom"/>
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="5" control={<Radio />} label="Perfect" labelPlacement="bottom"/>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </Grid>
        <ButtonGroup>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitClick}>Submit</Button>
        </ButtonGroup>
      </FormControl>
    </div>
  );

  return (
    <>
      <Button
        variant="outlined"
        size="medium"
        endIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
