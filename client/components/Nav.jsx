import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"


function Hamburger() {
  return (
    <Navbar expand="">
        <Container>
            <Navbar.Brand href="/"> Jot </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="navList">
                    <Nav.Link href="/">Landing</Nav.Link>
                    <Nav.Link href="category">Category</Nav.Link>
                    <Nav.Link href="About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>    
  )
}

export default Hamburger