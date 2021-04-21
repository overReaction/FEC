//React dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material-UI dependencies
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

//Component/Redux dependencies
import { increment, decrement } from './imageGallerySlice.js';

const GalleryMainImg = (props) => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector((state) => state.gallery.currentPhoto);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const activeStep = useSelector((state) => state.gallery.currentStep);

  return (
    <Grid container alignItems="center">
      <Grid item>
        <IconButton
          style={activeStep === 0 ? { visibility: 'hidden' } : {}}
          onClick={() => dispatch(decrement())}
        >
          <ArrowBackIcon/>
        </IconButton>
      </Grid>
      <Grid item container style={{ width: 700 }} justify="center">
        <img
          src={currentPhoto.url}
          style={{
            cursor: "zoom-in",
            objectFit: "cover",
            maxHeight: 700,
            maxWidth: 700,
            height: 'auto',
            width: 'auto'
          }}/>
      </Grid>
      <Grid item>
        <IconButton
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
