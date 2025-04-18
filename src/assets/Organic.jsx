import React from 'react'
import { Col, Container, Row,Button} from 'react-bootstrap'

export default function Organic() {
  return (

    // Natural & Organic
    
    <>

    <Container fluid>
      <div className='bgimg text-white'>
        <Row className='align-items-center p-4'>

          <Col>
            <h3 className='fw-light'>Natural & Organic</h3>
            <h1 className='display-3 fw-bold'>Hair <span className='text-dark fw-light'>Shampoo </span>For Healthy Hair</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et magnis dis parturient montes.</p>
            <Button variant="dark" className='fs-5'>Shop Now</Button>
            <Button variant="outline-dark" className='fs-5 ms-4'>Contact Us</Button>
          </Col>

          <Col>
            <img src='./img/shampoo.png' alt='' className=' image-fluid mx-auto d-block w-100 mt-5 image' />
          </Col>
        </Row>
      </div>
    </Container>

    </>
  )
}
