/**
*
* Galeria
*
*/

import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";


class Galeria extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }

    render() {

      const Fonda =styled(ImageGallery)`
          width: 400px;
      `;


      const images = [
        {
          original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',


        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        }
        ,
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        }
      ]

      return (
        <Fonda
          items={images}
          slideInterval={4000}
          onImageLoad={this.handleImageLoad}
          showPlayButton={false}
          showFullscreenButton={false}
          slideOnThumbnailHover={true}
          autoPlay={true}

        />

      );
    }
}

Galeria.propTypes = {

};

export default Galeria;
