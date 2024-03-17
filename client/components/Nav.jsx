import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { useLocation, Link } from "react-router-dom"


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
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>    
  )
}

export default Hamburger