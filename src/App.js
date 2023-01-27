import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { OldProjects } from "./components/OldProjects";
import { HowToInstallDocker } from "./components/HowToInstallDocker";
import { HowToInstallNodeJS } from "./components/HowToInstallNodeJS";
import { HowToInstallNodeRED } from "./components/HowToInstallNodeRED";
import { HowToInstallNginxProxyManager } from "./components/HowToInstallNginxProxyManager";
import { Contact } from "./components/Contact";
import { Imprint } from "./components/Imprint";
import { Privacy } from "./components/Privacy";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
          >
            <Container>
              <Navbar.Brand as={Link} to="/">
                Martin Smart Home Website
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-me">
                    About me
                  </Nav.Link>
                  <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/projects/how-to-install-docker">
                      How to install Docker
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/how-to-install-NodeJS">
                      How to install NodeJS
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/how-to-install-NodeRED">
                      How to install NodeRED
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/how-to-install-NginxProxyManager">
                      How to install Nginx Proxy Manager
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/projects/old">
                      Old projects
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                  <Nav.Link as={Link} to="/imprint">
                    Imprint
                  </Nav.Link>
                  <Nav.Link as={Link} to="/privacy">
                    Privacy
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects/how-to-install-docker" element={<HowToInstallDocker />} />
            <Route path="/projects/how-to-install-NodeJS" element={<HowToInstallNodeJS />} />
            <Route path="/projects/how-to-install-NodeRED" element={<HowToInstallNodeRED />} />
            <Route path="/projects/how-to-install-NginxProxyManager" element={<HowToInstallNginxProxyManager />} />
            <Route path="/projects/old" element={<OldProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
