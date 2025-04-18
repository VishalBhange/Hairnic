import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Office from './Office'
import { Link } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
     <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white'>
          <h1>Contact</h1>
          <div className='d-flex align-item-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>Contact</a>            
          </div>
        </div>
      </Container>
      <Office/>
      
      <Container fluid>
      <h1 className='fw-light text-center'>If You Have Any Query, <span className='fw-bold' style={{color:'#90bc79'}}> Please  </span></h1>
      <h1 className='fw-bold text-center' style={{color:'#90bc79'}}> Contact Us</h1>

        <Row className='cnt mt-4'>
          <Col md={7}>
          <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
          <Link to='/'>Download Now</Link>
          <Row className='mt-4 mb-4'>
            <Col><input type='text' placeholder='Your Name' className='form-control'></input></Col>
            <Col><input type='text' placeholder='Your Email' className='form-control'></input></Col>
          </Row>
          <input type='text' placeholder='Subject' className='form-control mb-4'></input>
          <textarea rows={7} className='form-control mb-4' placeholder='Message'></textarea>
          <Button className='px-4 fs-5 w-100 mb-5' style={{backgroundColor:'#90bc79',border:'2px solid #90bc79'}}>Send Message</Button>
          </Col>

          <Col md={5}>
          <iframe class="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>          
          </Col>  
        </Row>
      </Container>

    </div>  
  )
}
