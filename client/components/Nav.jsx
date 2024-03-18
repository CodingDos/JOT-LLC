import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { signOut } from "../services/users.js";
import * as navcss from "../styles/Nav.css";
import { useState } from "react";

function Hamburger({ user }) {
  let navigate = useNavigate();
  // let currentLocation = useLocation();
  // let buttonName;
  // let buttonLink;

  // const [className, setClassName] = useState("loggedOut");
  // if (setUser){
  //   setClassName["loggedIn"]
  //   // buttonName = "Login";
  //   // buttonLink = "/login";
  // } else if (currentLocation.pathname === "/login" || currentLocation.pathname ==="/") {
  //   buttonName = "Register";
  //   buttonLink = "/register";
  // } else if (currentLocation === "/register") {
  //   buttonName = "Login";
  //   buttonLink = "/login";
  // }

  const handleLogout = async () => {
    try {
      await signOut(); // Call signOut to remove the token
      navigate("/login"); // Navigate to login or any other appropriate path after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const authenticatedOptions = (
    <>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="navbarList">
          <Nav.Link href="/" className="navbarListItems">
            Landing
          </Nav.Link>
          <Nav.Link href="category" className="navbarListItems">
            Category
          </Nav.Link>
          <Nav.Link href="About" className="navbarListItems">
            About
          </Nav.Link>
          <Nav.Link onClick={handleLogout} href="/"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <Nav className="ms-auto">
        <Link to='/login'>
          <Button className="login-btn">Login</Button>
        </Link>
      </Nav>
    </>
  );

  const alwaysOptions = (
    <>
      <Navbar.Brand className="logo" href="/">
          Jot
      </Navbar.Brand>
    </>
  );

  return (
    <Navbar className="rootNav" expand="">
      <Container>
        {alwaysOptions}
        {user ? <></> : unauthenticatedOptions}
        {user ? authenticatedOptions : <></>}
      </Container>
    </Navbar>
  );
}

export default Hamburger;
