import React from 'react'
import { Col, Container, Row, Form, Breadcrumb } from 'react-bootstrap'

function Footer() {
  return (
    <div className='mt-5'>
      <Container fluid>
        {/* Top Subscription Section */}
        <div className='bgimg text-center p-5'>
          <h1 className='fw-light'>
            Let's Subscribe <span className='fw-bold text-white'> The Newsletter</span>
          </h1>
          <p className='text-white'>Subscribe now to get 30% discount on any of our products</p>
          <Form.Group className="d-flex justify-content-center align-items-center mt-5 px-2" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent opacity-50 border-4 border-white py-3 px-2 w-75 w-md-50"
              style={{ maxWidth: '500px' }}
            />
            <i className="fa-solid fa-paper-plane text-white fs-4 ms-2"></i>
          </Form.Group>
        </div>

        {/* Middle Content Section */}
        <Row className='mt-5 text-start px-4 px-md-5' xs={2} md={2} lg={4}>
          <Col className='mb-4'>
            <h1 style={{ color: "#90bc79" }}>Hairnic</h1>
            <p className='fs-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus.
            </p>
          </Col>

          <Col className='mb-4'>
            <h4>Get in Touch</h4>
            <ul className='list-unstyled mt-3'>
              <li><i className="fa-solid fa-location-dot me-3 text-secondary"></i>123 Street, New York, USA</li>
              <li className='mt-3'><i className="fa-solid fa-phone me-3 text-secondary"></i>+012 345 67890</li>
              <li className='mt-3'><i className="fa-solid fa-envelope me-3 text-secondary"></i>info@example.com</li>
            </ul>
            <div className='mt-3'>
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform, index) => (
                <a href="#" key={index} className='me-2'>
                  <i className={`fa-brands fa-${platform} rounded-circle p-2 fs-5`} style={{ border: "3px solid #90bc79", color: "#90bc79" }}></i>
                </a>
              ))}
            </div>
          </Col>

          <Col className='mb-4'>
            <h4>Our Products</h4>
            <ul className='list-unstyled mt-3'>
              {[
                "Hair Shining Shampoo",
                "Anti-dandruff Shampoo",
                "Anti Hair Fall Shampoo",
                "Hair Growing Shampoo",
                "Anti smell Shampoo"
              ].map((item, i) => (
                <li key={i}><a href="#"><i className="fa-solid fa-greater-than me-2 mt-3"></i>{item}</a></li>
              ))}
            </ul>
          </Col>

          <Col className='mb-4'>
            <h4>Popular Links</h4>
            <ul className='list-unstyled mt-3'>
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Condition",
                "Career"
              ].map((item, i) => (
                <li key={i}><a href="#"><i className="fa-solid fa-greater-than me-2 mt-3"></i>{item}</a></li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <hr className='mx-4 mx-md-5' />
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-4 px-md-5'>
          <p className='mb-2 mb-md-0'>
            &copy; <a href='#'>Hairnic</a>, All Rights Reserved. Designed by HTML Codex. Distributed by <span>Vishal Bhange</span>
          </p>
          <Breadcrumb className='mb-0' style={{ '--bs-breadcrumb-divider': "'|'" }}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Cookies</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Help</Breadcrumb.Item>
            <Breadcrumb.Item href="#">FAQs</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  )
}

export default Footer
