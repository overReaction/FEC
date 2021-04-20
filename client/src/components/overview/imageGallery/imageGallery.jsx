import React from 'react';
import { useSelector } from 'react-redux';

const ImageGallery = (props) => {
  const currentStyle = useSelector((state) => state.overview.currentStyle);
  return (
    <div data-testid="gallery" style={{ maxHeight: 600, margin: 'auto' }}>
      {currentStyle ? <img src={currentStyle.photos[0].url} style={{ maxHeight: 600 }}/> :
        <img style={{ maxHeight: 600 }} src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"/>
      }
    </div>
  );
};

export default ImageGallery;
