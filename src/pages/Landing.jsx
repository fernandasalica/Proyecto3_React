import Advertising from '../components/Advertising';
import Category from "../components/Category";
import Hero from "../components/Hero";
import ListMoviesContainer from "../components/ListMoviesContainer";
import NextPremieres from '../components/NextPremieres';

const Landing = () => {
  return (
    <>
      <Hero />
      <ListMoviesContainer />
      <Advertising />
      <Category />
      <NextPremieres />
 </>
  )
}

export default Landing