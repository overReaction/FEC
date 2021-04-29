//React dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material-UI dependencies
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//Component/Redux dependencies
import { increment, decrement } from './imageGallerySlice.js';
import { expandView } from '../overviewSlice.js';

const GalleryMainImg = (props) => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector((state) => state.gallery.currentPhoto);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const activeStep = useSelector((state) => state.gallery.currentStep);

  return (
    <Grid container alignItems="center">
      <Grid item xs={2} container justify="flex-end">
        <IconButton aria-label="previous photo"
          style={activeStep === 0 ? { visibility: 'hidden' } : {}}
          onClick={() => dispatch(decrement())}
        >
          <ArrowBackIcon/>
        </IconButton>
      </Grid>
      <Grid item container xs={8} justify="center">
        <img
          alt="main product photo"
          onClick={() => dispatch(expandView(true))}
          src={currentPhoto.url}
          style={{
            cursor: "zoom-in",
            objectFit: "cover",
            width: '30vw',
            height: '70vh'
          }}/>
      </Grid>
      <Grid item xs={2} container justify="flex-start">
        <IconButton aria-label="next photo"
          style={activeStep === currentStyle.photos.length - 1 ? { visibility: 'hidden' } : {}}
          onClick={() => dispatch(increment())}
        >
          <ArrowForwardIcon/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default GalleryMainImg;
