import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

export default function DealOfTheDay() {
  return (
    <div>
      <Container fluid className='bgimg mt-5 py-5 px-3'>
        <Row className='align-items-center g-4' xs={1} md={2}>
          {/* Image Section */}
          <Col>
            <img
              src='./img/shampoo-2.png'
              className='img-fluid mx-auto d-block w-100 mt-3'
              alt='shampoo'
              style={{ maxWidth: '450px' }}
            />
          </Col>

          {/* Deal Card Section */}
          <Col className='d-flex justify-content-center'>
            <Card
              style={{
                width: '100%',
                maxWidth: '34rem',
                outline: '20px solid white',
                borderRadius: '50%',
              }}
              className='py-4 px-3 mt-3 text-center'
            >
              <Card.Body>
                <Card.Title className='text-secondary'>Natural & Organic Shampoo</Card.Title>
                <h1 className='fw-bold'>Deals of the Day</h1>
                <h1 className='fw-bold' style={{ color: '#90bc79' }}>$99.99</h1>
                <h4>Fresh Organic Shampoo</h4>
                <p className='fs-6 fw-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus sed auctor.
                </p>

                {/* Countdown */}
                <div className='d-flex justify-content-between text-center mt-3 flex-wrap'>
                  {[
                    { label: 'Days', value: '0-226' },
                    { label: 'Hours', value: '21' },
                    { label: 'Mins', value: '47' },
                    { label: 'Secs', value: '40' },
                  ].map((item, i) => (
                    <div className='p-2 flex-fill' key={i}>
                      <h2 className='mb-0'>{item.value}</h2>
                      <small className='text-secondary'>~{item.label}~</small>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  className='px-4 fs-5 mt-4'
                  style={{ backgroundColor: '#90bc79', border: '2px solid #90bc79' }}
                >
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
