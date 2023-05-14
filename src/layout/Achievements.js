import { Container,Row,Col } from 'react-bootstrap'

import payment from '../images/payment.png'
import license from '../images/license.png'
const Achievements = () => {
    return (
        <Container>
            <Row className="justify-content-center p-5">
                <Col md={3}>
                    <h1 className="display-3 fw-bold">200+</h1>
                    <p className="text-muted small ">We have over 200 registered members on our platform.</p>
                </Col>
                <Col md={3}>
                    <img src={license} alt="License" height={80} />
                    <p className="text-muted small">We are duly licensed and regulated by the Lagos State Government.</p>
                </Col>
                <Col md={3}>
                    <img src={payment} alt="Payment" height={80} />
                    <p className="text-muted small"> Your funds are secured by our payment processing partner, Paystack.</p>
                </Col>
            </Row>
        </Container>
    )
}


export default Achievements;