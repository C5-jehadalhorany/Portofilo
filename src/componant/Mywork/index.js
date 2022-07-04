import {CardGroup,Card,Nav} from 'react-bootstrap';
import("./style.css")

function GroupExample() {
    return (
        <CardGroup>
            {/* <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656750520/image_5_ovpfqm.png" className='img_mywork' />
                <Card.Body>
                    <Card.Title>Portofilo</Card.Title>
                    <Card.Text>
                    My achievements, projects and some information about me .{' '}
                    </Card.Text>
                    <a href="https://ecmashop.netlify.app/" className='ECMA_LINK'>Portofilo </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">to contact me</small>
                </Card.Footer>
            </Card> */}
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656534279/cc_uo1fiy.png" className='img_mywork' />
                <Card.Body>
                    <Card.Title>ECMA TEAM</Card.Title>
                    <Card.Text>
                    Electrical products international classifications with prices and quantities.{' '}
                    </Card.Text>
                    <a href="https://ecmashop.netlify.app/" className='ECMA_LINK'>ECMA </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">The Project Group Team</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656749812/myapp_oc7j7w.jpg" className='img_mywork'/>
                <Card.Body>
                    <Card.Title>CAR FOR RINT</Card.Title>
                    <Card.Text>
                    A car rental site with international brands of cars and can get 2 cars.{' '}
                    </Card.Text>
                    <a href="https://p4-car-for-rint.netlify.app/" className='ECMA_LINK'>CAR FOR RINT</a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">The Solo Project</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default GroupExample;