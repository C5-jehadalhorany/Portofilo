import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import("./style.css")



const NavbaR = () => {

    return <Navbar bg="secondary" variant="dark"  >
          <img
                src="https://res.cloudinary.com/jehadforcars/image/upload/v1656621513/Screenshot_6_zljwid.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        <Container className='primary'>
            <Navbar.Brand href="/" className='home4'>  Portofilo</Navbar.Brand>
          
            <Nav className="me-left ">
                <Nav.Link href="#home" className='home1'>Home</Nav.Link>
                <Nav.Link href="https://1drv.ms/b/s!Av-gxGidmS0CjKR8wQWnx1nP5aSJLw?e=VNWMfC" className='home2'>Resume</Nav.Link>
                <Nav.Link href="" className='home3'>MyWork</Nav.Link>
            </Nav>
        </Container>
    </Navbar >

}

export default NavbaR