import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Imprint from "./Imprint";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
          >
            <Container>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about-me"}>
                    About me
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/imprint"}>
                    Imprint
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/">
              <Start />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/imprint">
              <Imprint />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
