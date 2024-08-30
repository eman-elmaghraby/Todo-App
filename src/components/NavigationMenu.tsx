import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

import './styles/NavigationMenu.module.css';


export default function NavigationMenu() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="rounded rounded-4 navbar-custom">
    <Container className='p-3 '>
      <Navbar.Brand href="#" className="navbar-logo">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
      <Navbar.Collapse id="basic-navbar-nav" className={`collapse ${isNavOpen ? 'show' : ''}`}>
        <Nav className=" ml-auto flex-grow-1 justify-content-end">
          <Nav.Link href="/" className="nav-item">Home</Nav.Link>
          <Nav.Link href="/about" className="nav-item">About</Nav.Link>
          <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
          <Nav.Link href="/register" className="nav-item">Register</Nav.Link>
          <Nav.Link href='/user-list' className='nav-item'>User List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
