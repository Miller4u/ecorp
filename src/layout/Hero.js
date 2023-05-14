import {Container,Row,Col,Button} from 'react-bootstrap'
import lady from '../images/lady.png'
const Hero = () =>{
    return (
        <div className='bg-lite text-navy pt-5 mt-6 vh-lg-100'>
             <Container>
                  <Row className="py-5">
                       <Col md={5}>
                             <h1 className="display-4 fw-bold">The No #1 cooperative society gone Digital.</h1>
                             <p className='text-muted'>We are committed to improving individual savings and investment habits. </p>
                             <Button size="lg" className="btn-blue mb-3">Get started.</Button>
                       </Col>
                       <Col md={7}>
                           <div className="d-flex flex-column">
                                <Button className="btn btn-white shadow align-self-start ms-lg-5">Total Savings <span className="text-blue"> #3000</span></Button>
                                <img src={lady} alt="Lady" className="img-fluid rounded-2 mtm-6 d-none d-sm-block"/>
                                <Button className="btn btn-white shadow align-self-end mbm-6">Total Loan <span className="text-danger"> #6000</span></Button>
                            </div>  
                       </Col>
                       
                  </Row> 
             </Container>
        </div>
    )
}

export default Hero;