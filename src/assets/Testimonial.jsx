import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Customer from './Customer'

export default function Testimonial() {
  return (
    <div>
         <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white mb-5'>
          <h1>Testimonial</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>Testimonnial</a>            
          </div>
        </div>
      </Container>
      <Natural/>
      <Customer/>
    </div>
  )
}
