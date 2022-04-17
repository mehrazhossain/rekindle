import React from 'react';
import { Carousel } from 'react-bootstrap';
import watchBanner from '../../images/Banner Photos/watch.png';
import redcurryBanner from '../../images/Banner Photos/red-curry.png';
import redbullBanner from '../../images/Banner Photos/red-bull.png';

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={watchBanner} alt="First slide" />
          <Carousel.Caption>
            <h3>Product Photography To Help You Sell</h3>
            <p>
              Make sure your beauty products look as good as your customers do.
              I'm offering you to
              <br /> most creative product photography such as high-quality
              image for business.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={redbullBanner}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Outstanding Photos At Reasonable Price</h3>
            <p>
              All product photography is shot using state-of-the-art robotic
              camera,
              <br /> with light sources designed to replicate natural light.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={redcurryBanner}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sell Your Product On Any Online Channel</h3>
            <p>
              One of the most important things you need to consider when
              building your online store is product photos. Product images tell
              your customers whether or not your item is what they want to
              purchase, and poor photograpy might be the cause of cart
              abandonment and lost sales.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
