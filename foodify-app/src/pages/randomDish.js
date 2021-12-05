import React from 'react';
import { Container} from 'react-bootstrap';
import RecipeItem from '../components/RecipeItem';


const randomDish = () => {
  return (
    <Container className="d-flex align-items-center mt-5">
      <RecipeItem />
    </Container>
  )
}


export default randomDish;
