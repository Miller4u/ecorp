import { Container, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Banner = (props) => {
    return (
        <Container className="bg-moon" fluid>

            <h1 className="text-center text-white">{props.pageName}</h1>
            <div className='d-flex justify-content-center'>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link to='/' className='text-decoration-none text-white'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active><Link className='text-muted text-decoration-none'>{props.pageName}</Link></Breadcrumb.Item>
                </Breadcrumb>
            </div>


        </Container>
    )
}
export default Banner;

