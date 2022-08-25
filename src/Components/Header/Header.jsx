import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaGift } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { TbArrowsRightLeft } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const linkShow = () => setShow(false);
  return (
    <div>
      <Navbar className="nev" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            <Link to="/">
              <img src="logo.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <>
            <Button variant="primary" onClick={handleShow} className="">
              Toggle static offcanvas
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                I will not close if you click outside of me.
              </Offcanvas.Body>
            </Offcanvas>
          </> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="gift gift3 m-0">
                <FaGift className="gift"></FaGift> How To Win $100+
              </Nav.Link>
              <Nav.Link href="#deets" className="gift3 work">
                <Link to="/Work_main">How It Work</Link>
              </Nav.Link>
              <Nav.Link href="#deets" className="gift3">
                <Link to="/About_main">About</Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="gift3">
                <Link to="/Faq_main">FAQ</Link>
              </Nav.Link>

              <NavDropdown
                title="Info"
                id="collasible-nav-dropdown"
                className="gift3"
              >
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/Overview_main">Overview</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/Pool_main">Pools</Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/Token_main">Tokens</Link>{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="nev2" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <>
            <Button className="menu" variant="primary" onClick={handleShow}>
              <FiMenu></FiMenu>
            </Button>

            <Offcanvas
              className="canvas"
              show={show}
              onHide={handleClose}
              backdrop="static"
            >
              <Offcanvas.Header closeButton>
                <Navbar.Brand className="brand2" href="#home"  onClick={linkShow}>
                  <Link to="/">
                    <img src="logo.png" alt="" />
                  </Link>
                </Navbar.Brand>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="canvas_body">
                <Nav>
                  {/* <Nav.Link href="#deets" className='gift gift3 m-0'><FaGift className='gift'></FaGift> How To Win $100+</Nav.Link> */}
                  <Nav.Link href="#deets" className="gift3"   onClick={linkShow}>
                    <Link to="/Work_main">
                      <FaHome className="hme"></FaHome>How It Work
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#deets" className="gift3"  onClick={linkShow}>
                    <Link to="/About_main">
                      <FaGamepad className="hme"></FaGamepad>About
                    </Link>
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes" className="gift3"  onClick={linkShow}>
                    <Link to="/Faq_main">
                      <FaGamepad className="hme"></FaGamepad>FAQ
                    </Link>
                  </Nav.Link>

                  <NavDropdown
                    title="Info"
                    id="collasible-nav-dropdown"
                    className="gift3"
                  >
                    <TbArrowsRightLeft className="hme"></TbArrowsRightLeft>
                    <NavDropdown.Item href="#action/3.2"  onClick={linkShow}>
                      <Link to="/Overview_main">Overview</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"  onClick={linkShow}>
                      <Link to="/Pool_main">Pools</Link>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"  onClick={linkShow}>
                      <Link to="/Token_main">Tokens</Link>{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
