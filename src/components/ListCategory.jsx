import React from 'react'

const ListCategory = ({data}) => {
  return (
    <>
    <h2>Categorias</h2>
    <div>{data.name}</div>
    </>
  );
};

export default ListCategory;