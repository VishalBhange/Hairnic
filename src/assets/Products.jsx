import React from 'react'
import { Col, Container, Row,Card, CardGroup, Button} from 'react-bootstrap'
import { FaStar } from "react-icons/fa";

export default function Products() {
  return (
    <div>
      
        <Container fluid className='text-center mt-5'>        
            <h1><span  className='fw-light'>Our Natural </span> <span className='fs-bold' style={{color:'#90bc79'}}> Hair Products</span></h1>
            <p className='mt-3 w-50 mx-auto d-block text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>

            <Row className='gap-3 pcard'>
           <Col>
      <Card>        
        <Card.Body>
        <img src="./img/product-1.png" className='img-fluid mx-auto d-block mb-3'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/> (99)
          <Card.Title>Hair Shining Shampoo</Card.Title>
          <Card.Text>
            <h4 style={{color:'#90bc79'}}>$99.99</h4>
          </Card.Text>
          <Button className='btn1'>Add To Cart</Button>
        </Card.Body>       
      </Card>
      </Col>

      <Col>
      <Card>
        
        <Card.Body>
        <img src="./img/product-2.png" className='img-fluid mx-auto d-block mb-3'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/> (99)
          <Card.Title>Anti-dandruff Shampoo</Card.Title>
          <Card.Text>
            <h4 style={{color:'#90bc79'}}>$99.99</h4>
          </Card.Text>
          <Button className='btn1'>Add To Cart</Button>
        </Card.Body>       
      </Card>
      </Col>

      <Col>
      <Card>
        
        <Card.Body>
        <img src="./img/product-1.png" className='img-fluid mx-auto d-block mb-3'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/> (99)
          <Card.Title>Anti Hair Fall Shampoo</Card.Title>
          <Card.Text>
            <h4 style={{color:'#90bc79'}}>$99.99</h4>
          </Card.Text>
          <Button className='btn1'>Add To Cart</Button>
        </Card.Body>       
      </Card>
      </Col>

      <Col>
           <Card>
        
        <Card.Body>
        <img src="./img/product-2.png" className='img-fluid mx-auto d-block mb-3'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/>
        <FaStar className='FaStar'/> (99)
          <Card.Title>Hair Growing Shampoo</Card.Title>
          <Card.Text>
            <h4 style={{color:'#90bc79'}}>$99.99</h4>
          </Card.Text>
          <Button className='btn1'>Add To Cart</Button>
        </Card.Body>       
      </Card>
      </Col>
       </Row>

        </Container>
    </div>
  )
}
