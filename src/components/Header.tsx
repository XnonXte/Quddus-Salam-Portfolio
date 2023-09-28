import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import face from "../assets/face.png";
import faceGrayscale from "../assets/face-grayscale.png";

import { HeaderProps } from "../types/HeaderProps";

const Header = ({ background }: HeaderProps) => {
  return (
    <section
      style={{
        background,
      }}
    >
      <Navbar expand="lg" className="bg-opacity-0 navbar-dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={face}
              alt="Logo"
              style={{
                width: "35px",
                marginRight: "12px",
                borderRadius: "50%",
                background,
              }}
            />
            <span className="text-primary">&lt;</span>Quddus Salam{" "}
            <span className="text-primary">/&gt;</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <Nav className="ms-auto">
              <Nav.Link href="#about">
                <span className="text-primary">&lt;</span>About{" "}
                <span className="text-primary">/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#projects">
                <span className="text-primary">&lt;</span>Projects{" "}
                <span className="text-primary">/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#socials">
                <span className="text-primary">&lt;</span>Socials{" "}
                <span className="text-primary">/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#email-me">
                <span className="text-primary">&lt;</span>Email Me{" "}
                <span className="text-primary">/&gt;</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="text-light p-5 text-center" id="about">
        <Container>
          <div className="d-md-flex align-items-center justify-content-between">
            <div>
              <h1>
                Hi! I'm <span className="text-warning">Quddus Salam</span>
              </h1>
              <p className="lead">
                I write programs, create software, and design UI almost on a
                daily basis
              </p>
              <Button
                variant="dark"
                as="a"
                target="_blank"
                href="https://github.com/XnonXte"
              >
                My GitHub <i className="bi bi-github"></i>
              </Button>
            </div>
            <img
              src={faceGrayscale}
              alt="My face"
              className="img-fluid d-none d-md-block"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </Container>
      </header>
    </section>
  );
};

export default Header;
