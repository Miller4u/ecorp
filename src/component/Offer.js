import { Col } from "react-bootstrap"
import { useState,React } from "react";
import Text from './Text'

const Offer = (props) => {
    const[active,setActive] = useState(false)

    return (
        <Col md={6} className="mt-3"   onMouseLeave={()=>{setActive(!active)}} onMouseEnter={()=>{setActive(!active)}}>
            <div className="p-5 hover">
                <div className="d-flex">
                    <span style={{ backgroundColor: props.bg, height: 40, width: 40 }} className="rounded-circle text-center fs-4 me-2"> {props.icon} </span>
                    <h5 className="fw-bold">{props.title}</h5>
                </div>
                <div className="ms-5">
                    <p className="text-muted">{props.text}</p>
                    <div className=" fw-bold" id="learn">
                           {
                            
                             active ? <Text bg={props.bg}/>: <Text/> 

                           }
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Offer;