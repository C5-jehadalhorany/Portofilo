import {CardGroup,Card,Nav} from 'react-bootstrap';
import("./style.css")

function GroupExample() {
    return (<div className='allthecontaner'>
       <div id='Mywork'><h1 >Mywork</h1></div> 
        <CardGroup>
           
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1657638540/0fbbcf10-7926-4c4e-b395-da248199bc6a_h4smx2.jpg" className='img_mywork' />
                <Card.Body>
                    <Card.Title>movieTask</Card.Title>
                    <Card.Text>
                    the movie, projects and some information about movie and description.{' '}
                    </Card.Text>
                    <Card.Footer>
                    <a href="https://taskmoveforjehad.netlify.app/" className='ECMA_LINK'>MovieTask </a></Card.Footer>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">The Project Frontend Only</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/jehadforcars/image/upload/v1656534279/cc_uo1fiy.png" className='img_mywork' />
                <Card.Body>
                    <Card.Title>ECMA TEAM</Card.Title>
                    <Card.Text>
                    Electrical products international classifications with prices and quantities.{' '}
                    </Card.Text>
                    <Card.Footer>
                    <a href="https://ecmashop.netlify.app/" className='ECMA_LINK'>ECMA </a>
                    </Card.Footer>
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
                    <Card.Footer>
                    <a href="https://p4-car-for-rint.netlify.app/" className='ECMA_LINK'>CAR FOR RINT</a>
                    </Card.Footer>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">The Solo Project</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        </div>
    );
}

export default GroupExample;