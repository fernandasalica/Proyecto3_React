import React, {useState, useEffect } from 'react';
import CrudMovies from '../pages/CrudMovies';

const ListMoviesContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3001/viewmovies')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);
  console.log('datos para tabla'+data)
  return (
    <CrudMovies data={data} />
  );
};

export default ListMoviesContainer;