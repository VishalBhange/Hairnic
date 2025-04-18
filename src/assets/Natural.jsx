import React from 'react'
import { Container, Row, Card, Col} from 'react-bootstrap'
import { FaLeaf, FaTintSlash, FaTimes  } from "react-icons/fa";

export default function Natural() 
{
    return (
        
        <div>
            <Container>
                <Row className='gap-5 mt-5'>
                    <Col>
                        <Card className='text-center '>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            <FaLeaf className='fs-1'/>
                                <h4 className='text-white mt-4 fw-border'>100% Natural</h4>
                            </Card.Body>
                        </Card>
                    </Col>
        
                    <Col>
                    <Card className='text-center'>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            <FaTintSlash className='fs-1'/>
                                <h4 className='text-white mt-4 fw-border'>Anti Hair Fall</h4>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    <Card className='text-center'>                           
                            <Card.Body className='ncard px-3 py-5 border'>
                            <FaTimes className='fs-1'/>
                                <h4 className='text-white mt-4 fw-border'>Hypoallergenic</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
