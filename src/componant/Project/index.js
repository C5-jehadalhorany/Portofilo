import Button from 'react-bootstrap/Button';
import { Card, Container,Row,Col } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import("./style.css")
function BasicExample() {

    // const navigate = useNavigate();
    const click = () => {
        // navigate(`/https://www.linkedin.com/in/jehadal-horany/`)
    }
    return (
        // <div class="container-sm">
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656444914/61688b0b-4d98-4f4e-bd57-06282ca8fefc_hg8h70.jpg"  height="100px"/>
                        <Card.Body>
                            <Card.Title>linked in</Card.Title>
                            <Card.Text>
                                can you see my linked in .
                            </Card.Text>
                            {/* <Link  to={"/https://www.linkedin.com/in/jehadal-horany/"}>link</Link> */}
                            <Card.Footer>
                            <a href="https://www.linkedin.com/in/jehadal-horany" className='links'>link</a>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656498157/image_5_ovl8bs.png" height="100px"  />
                        <Card.Body>
                            <Card.Title>github</Card.Title>
                            <Card.Text>
                               <small>can you see my github .</small> 
                            </Card.Text>
                            {/* <Link  to={"/https://www.linkedin.com/in/jehadal-horany/"}>link</Link> */}
                            <Card.Footer>
                            <a href="https://github.com/jehadalhorany" className='links'>link</a >
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656529814/image_5_a4nxsz.png" height="100px" />
                        <Card.Body>
                            <Card.Title>trello</Card.Title>
                            <Card.Text>
                                can you see my trello .
                            </Card.Text>
                            {/* <Link  to={"/https://www.linkedin.com/in/jehadal-horany/"}>link</Link> */}
                            <Card.Footer>
                            <a href="https://trello.com/b/jDyM91XT/project-5" className='links'>link</a>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        // </div>

    );
}

export default BasicExample;