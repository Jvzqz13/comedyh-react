import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from "../components/LogoutButton";


function NavBar () {
    return (
       
            <Navbar bg='dark' data-bs-theme='dark'  expand="lg" className="bg-body-tertiary">
              <Container fluid>
                
                <Navbar.Brand href="#"> LOGO </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-xlg-1"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                  
                  </Nav>
                  <Form className="d-flex searchbar">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="dark">SEARCH</Button>

                  </Form>
                    <LogoutButton />
                </Navbar.Collapse>
              </Container>
            </Navbar>
        
    )
}

export default NavBar;