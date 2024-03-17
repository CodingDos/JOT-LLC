import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { useLocation, Link } from "react-router-dom"
import * as navcss from "../styles/Nav.css"


function Hamburger() {

    let currentLocation = useLocation()
    let buttonName
    let buttonLink

    if (currentLocation.pathname === "/login"){
        buttonName = "Register"
        buttonLink = "/register"
    } else if (currentLocation === "/register") {
        buttonName = "Login"
        buttonLink = "/login"
    } else {
        buttonName = "Login"
        buttonLink = "/login"
    }

  return (
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
}

export default Hamburger