import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import NextPremieres from './NextPremieres';

const MovieDetail = ({data}) => {
  return (
    <Container>
        <h2 className='mt-2'>Nombre de pelicula</h2>
        <hr></hr>
        <Row>
          <div className="width-col">
              <Col  className="d-flex justify-content-start">
                <img src={data.image} className='image-movie'></img></Col>
              <Col>
                <div className='d-block justify-content-start mt-2'>
                  <p>Categoría:</p>
                  <p>Año:</p>
                  <p>Dirigida por:</p>
                  <p>Reparto:</p>
                </div>
              </Col>
              <Col>
                <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/watch?v=Sm6_rlrIKXw" />
                </Ratio>
              </Col>
            </div>
        </Row>
        <h4 className='mt-5'>Argumento</h4>
        <hr></hr>
        <p className="mb-5">{data.description}</p>
        <NextPremieres />
    </Container>
  );
};

export default MovieDetail;