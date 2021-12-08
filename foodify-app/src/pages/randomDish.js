import React from 'react';
import { Container, Button} from 'react-bootstrap';
import RecipeItem from '../components/RecipeItem';


const randomDish = () => {
  return (
    <div className="mt-5">
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <div>
      <RecipeItem />
      <Button variant="secondary" className="mt-1 mx-1" style={{width: 143}}>Skip</Button>
      <Button variant="secondary" className="mt-1 mx-1" style={{width: 143}}>Like</Button>
      </div>
    </Container>
    </div>
  )
}


export default randomDish;
