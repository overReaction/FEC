//React dependencies
import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

//Component/Redux dependencies
import GalleryNav from './galleryNav.jsx';
import GalleryMainImg from './galleryMainImg.jsx';


const ImageGallery = (props) => {
  const currentStyle = useSelector((state) => state.overview.currentStyle);

  if (currentStyle) {
    return (
      <Grid data-testid="gallery" container alignItems="center" wrap="nowrap">
        <Grid item>
          <GalleryNav />
        </Grid>
        <Grid item>
          <GalleryMainImg/>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <div data-testid="gallery" style={{ maxHeight: 600, margin: 'auto' }}> Loading </div>
    );
  }
};

export default ImageGallery;
