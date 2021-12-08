import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Button, NavLink } from 'react-bootstrap';
import { FAVORITES_ROUTE, RANDOM_DISH_ROUTE } from '../utils/consts'
import Modal from "./Modal";

const NavBar = () => {
  const history = useHistory();

  const [addCustonDishVisible, setAddCustomDish] = useState(false);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink style={{ color: "green" }}>FOODIFY APP</NavLink>
        <Button
          variant={"outline-dark"}
          onClick={() => history.push(FAVORITES_ROUTE)}>FAVORITES</Button>
        <Button
          variant={"outline-dark"}
          onClick={() => history.push(RANDOM_DISH_ROUTE)}>RANDOM DISH</Button>
          <Modal show={addCustonDishVisible} onHide={() => setAddCustomDish(false)} />
          <Button variant={"outline-dark"} onClick={setAddCustomDish}>Add Custom Dish</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
