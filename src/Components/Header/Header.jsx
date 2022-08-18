import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand className='brand' href="#home"><Link to="/"><img src="logo.png" alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='gift gift3'><FaGift className='gift'></FaGift> How To Win $100</Nav.Link>
            <Nav.Link href="#deets" className='gift3'><Link to="/Work_main">How It Work</Link></Nav.Link>
            <Nav.Link href="#deets" className='gift3'><Link to="/About_main">About</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='gift3'>
             <Link to="/Faq_main">FAQ</Link> 
            </Nav.Link>


            <NavDropdown title="Info" id="collasible-nav-dropdown" className='gift3'>
              <NavDropdown.Item href="#action/3.2">
               <Link to="/Overview_main">Overview</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/Pool_main">Pools</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/Token_main">Tokens</Link> </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header