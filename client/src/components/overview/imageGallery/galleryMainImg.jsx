//React dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material-UI dependencies
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//Component/Redux dependencies
import { increment, decrement, setStep, setCurrentPhoto } from './imageGallerySlice.js';

const GalleryMainImg = (props) => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector((state) => state.gallery.currentPhoto);

  return (
    <Grid container>
      <Grid item>
        <IconButton>
          <ArrowBackIcon/>
        </IconButton>
      </Grid>
      <Grid item>
        <img
          src={currentPhoto.url}
          style={{
            objectFit: "cover",
            maxHeight: 700,
            maxWidth: 850,
            height: 'auto',
            width: 'auto'
            // zIndex: -100,
            // position: 'absolute'
          }}/>
      </Grid>
      <Grid item>
        <IconButton>
          <ArrowForwardIcon/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default GalleryMainImg;
