import {Container,Row,Col,Button} from 'react-bootstrap'
import basket from '../images/basket.png'
const Goal = () =>{
    return(
        <Container className="p-5">
            <Row className="mt-5">
                 <Col md={6}>
                       <img src={basket} alt="img" className='img-fluid'/>
                 </Col>
                 <Col md={6} className="align-self-center">
                     <h1>We will double your financial capacity</h1>
                     <p>Cloud Cooperative is here to inject saving habits to the current system by creating easy and fair saving plans that would be favorable to our customers.</p>
                     <p>Saving would not just be made easy but borrowing loans would become way easier than you can imagine.</p>
                     <Button className="px-5 py-3 rounded-pill"> Learn More</Button>
                 </Col>
            </Row>
        </Container>
    )
}
export default Goal;