import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import ReactImageMagnify from 'react-image-magnify';

//Material-UI dependencies
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

//Component/Redux dependencies
import { increment, decrement } from './imageGallerySlice.js';
import { expandView } from '../overviewSlice.js';

const ExpandedView = (props) => {
  const dispatch = useDispatch();
  const currentPhoto = useSelector((state) => state.gallery.currentPhoto);
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const activeStep = useSelector((state) => state.gallery.currentStep);

  return (
    <div style={{ maxHeight: '100%', maxWidth: '100%', backgroundColor: 'black' }}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <IconButton
            style={activeStep === 0 ? { visibility: 'hidden', color: 'white' } : { color: 'white' }}
            onClick={() => dispatch(decrement())}
          >
            <ArrowBackIcon/>
          </IconButton>
        </Grid>
        <Grid item container xs={10} justify="center">
          <img
            onClick={() => dispatch(expandView(false))}
            src={currentPhoto.url}
            style={{
              cursor: "crosshair",
              objectFit: "cover",
              height: '100vh',
              width: 'auto'
            }}/>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            style={activeStep === currentStyle.photos.length - 1 ? { visibility: 'hidden', color: 'white' } : { color: 'white' }}
            onClick={() => dispatch(increment())}
          >
            <ArrowForwardIcon/>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

// <ReactImageMagnify {...{
//     smallImage: {
//         alt: 'Wristwatch by Ted Baker London',
//         isFluidWidth: true,
//         src: watchImg300
//     },
//     largeImage: {
//         src: watchImg1200,
//         width: 1200,
//         height: 1800
//     }
// }} />

export default ExpandedView;
