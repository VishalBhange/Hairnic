import React from 'react'
import { Container, Row, Card, Col} from 'react-bootstrap'
// import { FaLocationDot } from "react-icons/fa";
// import {BsFillTelephoneFill} from "react-icons/bs";
// import {IoMdMail   } from "react-icons/io";

export default function Office() {
  return (
    <div>
         <Container>
                <Row className='gap-5 mt-5 mb-5'>
                    <Col>
                        <Card className='text-center '>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            {/* <FaLocationDot className='fs-1'/> */}
                                <h4 className='text-white mt-4 fw-border'>Office Address</h4>
                                <h4 className='fw-light text-white'>123 Street, New York, USA</h4>
                            </Card.Body>
                        </Card>
                    </Col>
        
                    <Col>
                    <Card className='text-center'>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            {/* <BsFillTelephoneFill  className='fs-1'/> */}
                                <h4 className='text-white mt-4 fw-border'>Call Us</h4>
                                <h4 className='fw-light text-white'>+012 345 67890</h4>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card className='text-center'>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            {/* <IoMdMail  className='fs-1'/> */}
                                <h4 className='text-white mt-4 fw-border'>Mail Us</h4>
                                <h4 className='fw-light text-white'>info@example.com</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}
