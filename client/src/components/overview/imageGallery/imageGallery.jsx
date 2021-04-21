//React dependencies
import React from 'react';
import { useSelector } from 'react-redux';

//Component/Redux dependencies
import GalleryNav from './galleryNav.jsx';

const ImageGallery = (props) => {
  const currentStyle = useSelector((state) => state.overview.currentStyle);

  if (currentStyle) {
    return (
      <GalleryNav />
    );
  } else {
    return (
      <div data-testid="gallery" style={{ maxHeight: 600, margin: 'auto' }}> Loading </div>
    );
  }
};

export default ImageGallery;
