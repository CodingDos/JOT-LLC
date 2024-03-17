<<<<<<< HEAD
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { useLocation, Link } from "react-router-dom"
import * as navcss from "../styles/Nav.css"

=======
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { signOut } from "../services/users.js";
>>>>>>> d272296188524d5c43caae841d121d91299a2393

function Hamburger() {
  let navigate = useNavigate();
  let currentLocation = useLocation();
  let buttonName;
  let buttonLink;

  if (currentLocation.pathname === "/login") {
    buttonName = "Register";
    buttonLink = "/register";
  } else if (currentLocation === "/register") {
    buttonName = "Login";
    buttonLink = "/login";
  } else {
    buttonName = "Login";
    buttonLink = "/login";
  }

  const handleLogout = async () => {
    try {
      await signOut(); // Call signOut to remove the token
      navigate("/login"); // Navigate to login or any other appropriate path after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
<<<<<<< HEAD
    <Navbar className="rootNav"expand="">
        <Container>
            <Navbar.Brand className ="logo"href="/"> Jot </Navbar.Brand>
            <Nav className="ms-auto">
                <Link to={buttonLink}>
                    <Button className="">{buttonName}</Button>
                </Link>
            </Nav>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="navbarList">
                        <Nav.Link href="/" className="navbarListItems">Landing</Nav.Link>
                        <Nav.Link href="category" className="navbarListItems">Category</Nav.Link>
                        <Nav.Link href="About" className="navbarListItems">About</Nav.Link>
                        <Nav.Link href="/" className="navbarListItems">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>    
  )
=======
    <Navbar expand="">
      <Container>
        <Navbar.Brand href="/"> Jot </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to={buttonLink}>
            <Button className="">{buttonName}</Button>
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="navList">
            <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="category">Category</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link onClick={handleLogout} href="/">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
>>>>>>> d272296188524d5c43caae841d121d91299a2393
}

export default Hamburger;
