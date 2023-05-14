import {Col} from 'react-bootstrap'
const Step = (props) =>{
    return(
        <Col md={4}>
            <div className='bg-step p-5'>
                <h1>{props.id}.</h1>   
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </Col>
    )
}

export default Step;