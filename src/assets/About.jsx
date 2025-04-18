import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Hailthyhair from './Healthyhair'

export default function About() {
  return (
    <div>
      <Container fluid>
        <div className='bgimg p-5 text-center mb-4 text-white'>
          <h1>About Us</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>About</a>
            
          </div>
        </div>
        <Natural/>
        <Hailthyhair/>
      </Container>
    </div>
  )
}
