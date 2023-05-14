import { Form, InputGroup, Container, Row, Col, Button } from 'react-bootstrap';
import { BsPerson, BsLock, BsEye,BsTelephone } from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Signup = () => {


    return (
        <Container>
            <Row className="justify-content-center text-center mt-5">
                <Col md={4}>
                    <h3 className='text-blue'>Create Account!</h3>
                    <p className='small'>Sign in to continue to your dashboard</p>
                    <hr />
                    <InputGroup>
                        <InputGroup.Text className="bg-transparent rounded-0">
                            <BsPerson />
                        </InputGroup.Text>
                        <Form.Control placeholder="Fullname" className="rounded-0 shadow-sm"></Form.Control>
                    </InputGroup>
                    <InputGroup className="my-3">
                        <InputGroup.Text className="bg-transparent rounded-0">
                            <AiOutlineMail />
                        </InputGroup.Text>
                        <Form.Control placeholder="Email" className="rounded-0 shadow-sm"></Form.Control>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="bg-transparent rounded-0">
                            <BsTelephone />
                        </InputGroup.Text>
                        <Form.Control placeholder="Phone" className="rounded-0 shadow-sm"></Form.Control>
                    </InputGroup>

                    <InputGroup className="my-3">
                        <InputGroup.Text className="bg-transparent rounded-0">
                            <BsLock />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" className="rounded-0 shadow-sm"></Form.Control>
                        <InputGroup.Text className="bg-transparent rounded-0">
                            <BsEye />
                        </InputGroup.Text>
                    </InputGroup>
                    <div className="d-grid">
                        <Button variant="dark" className="rounded-0">Sign in</Button>
                    </div>
                    <p className='small mt-3'> <Link to="/forgot-password" className="text-decoration-none link-danger">Forgot Password?</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;