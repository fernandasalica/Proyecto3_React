import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Movie = ({ d }) => {
  return (
    <Col className="g-4">
        <Card className='p-0 h-100'>
            <Card.Img className="top image-movie" src={d.image} />
                <Card.Body>
                    <Card.Title className='movie-title'>
                    <Link to={`/MovieDetailContainer/${d._id}`}>
                        {d.name}
                    </Link>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className='p-1'>
                    <Row>
                        <Col>
                            <i className="fa-solid fa-star"></i>
                        </Col>
                        <Col>
                            <Link to="/">  
                                <div className='d-flex justify-content-end movie-title'>
                                    <p>Trailer</p>
                                </div> 
                            </Link>
                        </Col>
                    </Row>
                </Card.Footer>
        </Card>
    </Col>
  );
};

export default Movie;