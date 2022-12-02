import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <Container className='mb-5'>
         <h2 className='mt-2'>CATEGORIAS</h2>
         <hr></hr>
        <Row className='mb-5'>
        </Row>
         <Row xs={1} md={2} className="g-5">
            <Col>
                <Row>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider1.jpg" />
                            <Card.Body>
                            <Link to='/ListCategoryContainer/Comedia'>
                                <Card.Title>Comedias</Card.Title>
                            </Link>    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider2.jpg" />
                            <Card.Body>
                            <Link to='/ListCategoryContainer/Acción'>   
                                <Card.Title>Acción</Card.Title>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider3.jpg" />
                            <Card.Body>
                            <Link to='/ListCategoryContainer/Drama'>  
                                <Card.Title>Drama</Card.Title>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/slider1.jpg" />
                            <Card.Body>
                            <Link to='/ListCategoryContainer/Suspenso'>
                                <Card.Title>Suspenso</Card.Title>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Card>
                    <div style={{ width: 'auto', height: 'auto' }} className="d-none d-md-block">
                        <Ratio aspectRatio="16x9">
                            <embed type="image/svg+xml" src="https://www.youtube.com/embed/D30r0CwtIKc" />
                        </Ratio>
                     </div>
                    <Card.Body className="d-none d-md-block p-2">
                        <Card.Img variant="top" src="./img/publicity.jpg" />
                    </Card.Body>
                </Card>
            </Col>
         </Row>
    </Container>
  );
};

export default Category;