import { Col, Container, Row } from "react-bootstrap"
import security from '../images/security.png'
import {BiLock,BiRegistered} from 'react-icons/bi'

const Security = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className="align-self-center">
                    <h1 className="display-6 fw-bold text-navy">Keeping your money safe is our business.</h1>
                    <p className="text-muted">Trust is our currency. We are committed to the security of your money and the protection of your account. That is how we earn your trust.</p>
                    <div>
                        <div className="d-flex">
                            <span  className="fs-4 text-center "><BiLock/></span>
                            <h5 className="fw-bold text-blue ms-lg-3 my-auto">Bank-grade Security</h5>
                        </div>
                        <p className="text-muted ms-lg-5">Our payment processors are PCI-DSS compliant to ensure security of your data electronically.</p>
                    </div>
                    <div>
                        <div className="d-flex">
                            <span className="fs-4 text-center"><BiRegistered/> </span>
                            <h5 className="fw-bold text-blue ms-lg-3 my-auto">Regulatory Compliance</h5>
                        </div>
                        <p className="text-muted ms-lg-5">We're licensed & regulated by the Lagos State Government under the Cooperative Societies Act (2013) as amended.</p>
                    </div>
                </Col>

                <Col md={6} className="">
                    <img src={security} alt="security" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}


export default Security;