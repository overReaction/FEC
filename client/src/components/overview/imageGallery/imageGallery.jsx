import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { increment, decrement, setStep } from './imageGallerySlice.js';

const ImageGallery = (props) => {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const activeStep = useSelector((state) => state.gallery.currentStep);
  //const visibleSteps = useSelector((state) => state.gallery.visibleSteps);

  if (currentStyle) {
    return (
      <div style={{ height: 600 }}>
        <div>
          <IconButton
            disabled={activeStep === 0}
            onClick={() => dispatch(decrement())}
          >
            <ArrowUpwardIcon/>
          </IconButton>
        </div>
        <Stepper activeStep={activeStep} orientation="vertical" style={{ height: 500 }} connector="disabled">
          {currentStyle.photos.map((photo, index) => {
            var url;
            if (photo && photo.thumbnail_url) {
              url = photo.thumbnail_url;
            } else {
              url = "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80";
            }
            return (
              <Step
                key={index}
                expanded="true"
                // style={visibleSteps.indexOf(index) === -1 ? { display: "none" } : {}}
              >
                <StepContent
                  onClick={() => dispatch(setStep(index))}>
                  <img src={url}
                    style={activeStep === index ?
                      { border: '2px solid red', maxWidth: 75, height: 'auto' } :
                      { borderColor: 'black', maxWidth: 75, height: 'auto' }}
                  />
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <IconButton
          disabled={activeStep === currentStyle.photos.length - 1}
          onClick={() => dispatch(increment())}
        >
          <ArrowDownwardIcon/>
        </IconButton>
      </div>
    );
  } else {
    return (
      <div data-testid="gallery" style={{ maxHeight: 600, margin: 'auto' }}> Loading </div>
    );
  }
};

export default ImageGallery;
