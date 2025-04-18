import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoHome } from "react-icons/io5";

function Use() {
  return (
    <div>
        <Container fluid className='bgimg text-center p-4 mt-5 mb-5'>
            <Container className='p-3 mt-5'>
                <h1 className='fw-light w-50 mx-auto d-block'>How To Use Our<span className='text-white fw-bold'> Natural & Organic </span>Hair Shampoo</h1>

                <p className='mt-3 w-50 mx-auto d-block text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </Container>

            <Row className='p-1 ms-3'>
              <Col>
              <IoHome className='fs-1 p-5 rounded-circle border'/>
              <div className='text-white p-3'>
              <h5 className='fw-bolder'>Wash <span className='border-bottom border-3 pb-1'>Hair With</span>  Water</h5>
              <p className=' mt-3 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada  consequat.</p>   
              </div>                       
              </Col>

              <Col>
              <IoHome className='fs-1 p-5 rounded-circle border'/>
              <div className='text-white p-3'>
              <h5 className='fw-bolder'>Apply <span className='border-bottom border-3 pb-1'>Shampoo</span>  On Hair</h5>
              <p className=' mt-3 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada  consequat.</p>   
              </div>  
              </Col>

              <Col>
              <IoHome className='fs-1 p-5 rounded-circle border'/>
              <div className='text-white p-3'>
              <h5 className='fw-bolder'>Wait <span className='border-bottom border-3 pb-1'>5 Mins And </span>  Wash</h5>
              <p className=' mt-3 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada  consequat.</p>   
              </div>  
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Use