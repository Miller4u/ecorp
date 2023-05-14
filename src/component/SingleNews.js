import React from 'react'
import {Card,Col} from 'react-bootstrap'

export const SingleNews = (props) => {
  return (
    <Col lg={3} md={4}>
        <Card className='shadow'>
           <Card.Img src={props.imgUrl}></Card.Img>
           <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <div className='d-flex justify-content-between'>
                   <h4>By {props.author}</h4>
                   <h4>{props.date}</h4>
               </div>
               <Card.Text>{props.content}</Card.Text>
           </Card.Body>
        </Card>
    </Col>
  )
}
