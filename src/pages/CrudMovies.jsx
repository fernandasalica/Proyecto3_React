import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';


const CrudMovies = ({data}) => {
 

  return (
    <>
      <CrudForm />
      <CrudTable data={data}/>
    </>
  );
};

export default CrudMovies;