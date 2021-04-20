/*
  This is a temporary stylesheet for the ratingsReviews widget
  for visualization during production only.  This file and all associated
  references to it should be deleted once the widget is complete.
*/

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(2)
  },
  rating: {
    flexDirection: 'row'
  }
}));

export default useStyles;
