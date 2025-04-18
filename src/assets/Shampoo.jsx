import React from 'react'
import { Container } from 'react-bootstrap'
import Products from './Products'

export default function Shampoo() {
  return (
    <div>
        <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white'>
          <h1>Products</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>Products</a>            
          </div>
        </div>
      </Container>
      <Products/>
    </div>
  )
}
