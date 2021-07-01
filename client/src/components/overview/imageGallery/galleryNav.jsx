//React dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material-UI dependencies
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//Component/Redux dependencies
import { increment, decrement, setStep, setCurrentPhoto, setStylePhotos } from './imageGallerySlice.js';

const theme = createMuiTheme({
  overrides: {
    MuiStepContent: {
      root: {
        borderLeft: 'none',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 0,
        marginBottom: 5,
        marginLeft: 0
      }
    },
    MuiStepper: {
      root: {
        padding: 8,
        backgroundColor: '#fafafa'
      }
    }
  }
});

const GalleryNav = (props) => {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  const activeStep = useSelector((state) => state.gallery.currentStep);
  const visiblePhotos = useSelector((state) => state.gallery.visibleSteps);

  useEffect(() => {
    if (currentStyle.photos[activeStep] && currentStyle.photos[activeStep].url) {
      dispatch(setCurrentPhoto(currentStyle.photos[activeStep]));
      let pics = JSON.parse(JSON.stringify(currentStyle.photos));
      pics.forEach((item, index) => {
        item.index = index;
      });
      dispatch(setStylePhotos(pics));
    } else {
      let dummyPhoto = [{
        thumbnail_url: "/assets/imgPlaceholder.jpeg",
        url: "/assets/imgPlaceholder.jpeg"
      }];
      dispatch(setCurrentPhoto(dummyPhoto[0]));
      dispatch(setStylePhotos(dummyPhoto));
    }
  }, [currentStyle]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 'auto', maxHeight: 700 }}>
        <div>
          <IconButton aria-label="next photo"
            disabled={activeStep === 0}
            onClick={() => dispatch(decrement())}
          >
            <ArrowUpwardIcon/>
          </IconButton>
        </div>

        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={{ height: "auto", maxHeight: 650 }}
          connector={<></>}
        >
          {visiblePhotos.map((photo) => {
            var url;
            if (photo && photo.thumbnail_url) {
              url = photo.thumbnail_url;
            } else {
              url = "/assets/imgPlaceholder.jpeg";
              dispatch(setCurrentPhoto({
                thumbnail_url: "/assets/imgPlaceholder.jpeg",
                url: "/assets/imgPlaceholder.jpeg"
              }));
            }
            return (
              <Step
                key={photo.index}
                expanded
              >
                <StepContent
                  onClick={() => dispatch(setStep(photo.index))}>
                  <img
                    alt={`thumbnail`}
                    src={url}
                    style={activeStep === photo.index ?
                      { filter: "drop-shadow(8px 8px 10px gray)", objectFit: "cover", height: 75, width: 75 } :
                      { objectFit: "cover", height: 75, width: 75 }}
                  />
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <IconButton aria-label="previous photo"
          disabled={activeStep === currentStyle.photos.length - 1}
          onClick={() => dispatch(increment())}
        >
          <ArrowDownwardIcon/>
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

export default GalleryNav;
