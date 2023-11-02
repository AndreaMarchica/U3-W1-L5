import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.png";
import Image from "react-bootstrap/Image";
import "../MyNavbar.css";
import { Link } from "react-router-dom";

const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            <Image width={150} src={Logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/TVShows">
                TV Shows
              </Link>
              <Link className="nav-link" to="">
                Movies
              </Link>
              <Link className="nav-link" to="">
                Recently Added
              </Link>
              <Link className="nav-link" to="">
                My List
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
