import React from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const ProductBreakdown = (props) => {
  const chars = useSelector((state) => state.app.reviewMetadata);

  const theme = createMuiTheme({
    overrides: {
      MuiSlider: {
        root: {
          width: '100%',
          color: "#D9D6CF",
          height: 2
        },
        mark: {
          height: 8,
          width: 1,
          marginTop: -3,
          backgroundColor: '#000000'
        }
      }
    }
  });

  const marksQuality = [
    {
      value: 0,
      label: 'poor'
    },
    {
      value: 100,
      label: 'excellent'
    }
  ];

  const marksSizing = [
    {
      value: 0,
      label: 'too small'
    },
    {
      value: 50,
      label: 'perfect'
    },
    {
      value: 100,
      label: 'too big'
    }
  ];

  if (chars.characteristics) {
    console.log(chars.characteristics);
    return (
      <>
        <Grid container spacing={1}>
          {Object.keys(chars.characteristics).map((char) => {
            let score = parseInt(chars.characteristics[char].value, 10) / 5;
            if (char === 'Quality' || char === 'Comfort') {
              return (
                <Grid item xs={12}>
                  {char}
                  <ThemeProvider theme={theme}>
                    <Slider
                      value={score * 100}
                      track={false}
                      marks={marksQuality}
                    />
                  </ThemeProvider>
                </Grid>
              );
            } else {
              return (
                <ThemeProvider theme={theme}>
                  <Grid item xs={12}>
                    {char}
                    <Slider
                      value={score * 100}
                      track={false}
                      marks={marksSizing}
                    />
                  </Grid>
                </ThemeProvider>
              );
            }
          })}
        </Grid>
      </>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default ProductBreakdown;
