import React from 'react';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// DELETE WHEN FINISHED
import useStyles from "./tempStyles.jsx";

const ReviewActions = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          More Reviews
        </Button>
        {" "}
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          endIcon={<AddIcon />}
        >
          Add Review
        </Button>
      </Paper>
    </div>
  );
};

export default ReviewActions;
