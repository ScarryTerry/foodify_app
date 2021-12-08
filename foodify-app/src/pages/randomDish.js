import React from 'react';
import { Container, Button} from 'react-bootstrap';
import RecipeItem from '../components/RecipeItem';
import { getRecipe } from '../http/dishAPI';


const RandomDish = () => {

  const click = async () => {
    await getRecipe();
  }
  return (
    <div className="mt-5">
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <div>
      <RecipeItem />
      <Button variant="secondary" className="mt-1 m-1" style={{width: 165}} onClick={click}>Skip</Button>
      <Button variant="secondary" className="mt-1 m-1" style={{width: 165}}>Like</Button>
      </div>
    </Container>
    </div>
  )
}


export default RandomDish;
