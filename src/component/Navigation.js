import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { Link, Outlet } from 'react-router-dom'
function Navigation() {
    return (
        <>
            <Navbar bg="white" variant="light" expand="lg" className="py-4" fixed="top">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="logo" height={40} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto" navbarScroll>
                            <Link to="/" className="nav-link">  Home  </Link>
                            <Link to="/service" className="nav-link"> Service</Link>
                            <Link to="/price" className="nav-link"> Price</Link>
                            <Link to="/news" className="nav-link"> News</Link>
                            <Link to="/signin" className="nav-link"> Sign in</Link>
                            <Link to="/signup" className="nav-link btn-outline-blue px-3">Sign up</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}
export default Navigation;