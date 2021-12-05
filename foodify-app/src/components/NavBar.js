import React from 'react';
import { Navbar, Container, Button, NavLink } from 'react-bootstrap'; 
import Modal from './Modal';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink style={{color:"green"}}>FOODIFY APP</NavLink>
        <Button variant={"outline-dark"}>FAVORITES</Button>
        <Button variant={"outline-dark"}>RANDOM DISH</Button>
        <Modal />
      </Container>
    </Navbar>
  );
}

export default NavBar;
