import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import Movie from './Movie';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const ListMovie = props => {
  return (
    <Container className='mb-5'>
        <h2 className='mt-4'>CARTELERA</h2>
        <hr></hr>
        <p className='mb-5'>Mira nuestra nueva cartelera, las mejores películas están en nuestro blog.</p>
        <Row xs={2} md={3} xl={5} className="g-5">
            {props.data.map((d, i) => (
                <Movie d={d} key={'Movie' + i} />
            ))}
        </Row>
        <div className='d-flex justify-content-center mt-4'>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    </Container>
  );
};

export default ListMovie;