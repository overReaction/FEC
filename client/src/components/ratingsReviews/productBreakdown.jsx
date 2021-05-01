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
          color: "#78756e",
          height: 2,
          cursor: 'default'
        },
        mark: {
          height: 8,
          width: 1,
          marginTop: -2,
          backgroundColor: '#000000'
        },
        track: {
          height: 4
        },
        rail: {
          height: 4
        },
        thumb: {
          height: 12,
          width: 12,
          backgroundColor: '#000',
          marginTop: -4,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
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
    return (
      <Grid item xs={12} container spacing={1}>
        {Object.keys(chars.characteristics).map((char) => {
          let score = parseInt(chars.characteristics[char].value, 10) / 5;
          if (char === 'Quality' || char === 'Comfort') {
            return (
              <Grid container item xs={12} key={char}>
                <Grid item xs={12}>
                  {char}
                </Grid>
                <Grid item xs={1}/>
                <ThemeProvider theme={theme}>
                  <Grid item xs={10}>
                    <Slider
                      aria-label={`${char} rating`}
                      value={score * 100}
                      track={false}
                      marks={marksQuality}
                    />
                  </Grid>
                </ThemeProvider>
                <Grid item xs={1}/>
              </Grid>
            );
          } else {
            return (
              <Grid container item xs={12} key={char}>
                <Grid item xs={12}>
                  {char}
                </Grid>
                <Grid item xs={1}/>
                <ThemeProvider theme={theme}>
                  <Grid item xs={10}>
                    <Slider
                      aria-label={`${char} rating`}
                      value={score * 100}
                      track={false}
                      marks={marksSizing}
                    />
                  </Grid>
                  <Grid item xs={1}/>
                </ThemeProvider>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default ProductBreakdown;
