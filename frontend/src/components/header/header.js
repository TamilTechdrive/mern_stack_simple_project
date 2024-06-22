import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const header = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">New App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user">post user</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default header