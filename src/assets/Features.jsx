import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Bestbenefits from './Bestbenefits'

export default function Features() {
  return (
    <div>
         <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white'>
          <h1>Features</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>Features</a>            
          </div>
        </div>
      </Container>
     <Natural/>
     <Bestbenefits/>
    </div>
  )
}
