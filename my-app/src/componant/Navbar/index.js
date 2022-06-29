import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import("./style.css")



 const NavbaR = () => {

    return <Navbar bg="secondary"  variant="dark"  >
        <Container className='primary'>
            <Navbar.Brand href="/">Portofilo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://1drv.ms/b/s!Av-gxGidmS0CjKR8wQWnx1nP5aSJLw?e=VNWMfC">Resume</Nav.Link>
                <Nav.Link href="">Project</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    
}

export default NavbaR