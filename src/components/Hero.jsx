import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='font-weight-bold'>
            <h1>TITULO</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slider2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='font-weight-bold'>
            <h1>TITULO</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./slider3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='font-weight-bold'>
            <h1>TITULO</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero