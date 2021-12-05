import React from 'react';
import {Container} from 'react-bootstrap';
import RecipeItem from '../components/RecipeItem';

const favorites = () => {
  return (
    <Container className="d-flex justify-content-between align-items-center mt-5">
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
    </Container>
  )
}

export default favorites;
