import React from 'react'
import { Container } from 'react-bootstrap'
import Blogs from './Blogs'

export default function Articles() {
  return (
    <div>
         <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white mb-5'>
          <h1>Blog Article</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home</a>
            <a href='#' className='text-white '>Pages</a>
            <a href='#' className='text-white '>Blog Article</a>            
          </div>
        </div>
      </Container>
      <Blogs/>
        
    </div>
  )
}
