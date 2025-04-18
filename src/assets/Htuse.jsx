import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Use from './Use'

export default function Htuse() {
  return (
    <div>
         <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white mb-5'>
          <h1>How to Use</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>How to Use</a>            
          </div>
        </div>
      </Container>
      <Natural/>
      <Use/>
    </div>
  )
}
