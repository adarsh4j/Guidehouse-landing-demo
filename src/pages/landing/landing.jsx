import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import guidehouse from "../../../public/guide.png";
import "./landing.css";

const landing = () => {
  return (
    <div>
      <Navbar  bg="light" expand="lg" className="curved-navbar">
        <Container>
          <Navbar.Brand href="https://guidehouse.com/">
            <img
              src={guidehouse}
              alt="Guidehouse Logo"
              width="30" // Adjust size as needed
              height="30"
              className="d-inline-block align-top"
            ></img>
            Guidehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Carrier</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div className="text-center align-top text-white ">
        <h1 className="mb-4 fs-30 ">Welcome to GuideHouse</h1> 
        <p className="mb-6 fs-4 " >Complex journeys demand a trusted guide. That’s us.</p><br />
        <Button variant="primary" >Learn More</Button>
      </div>
      <br />
      <footer className="text-center py-4 text-white">
        <p>&copy; 2025 Guidehouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default landing;
