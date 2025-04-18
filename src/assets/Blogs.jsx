import React from 'react'
import { Container } from 'react-bootstrap'

export default function Blogs() {
  return (
    <div>
        <Container fluid>
            <div className='text-center mt-5 w-50 mx-auto d-block'> 
            <h1 className='fw-light'>From Our <span className='fw-bold' style={{color:"#90bc79"}}> Blog Articles</span></h1>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>

        </Container>
    </div>
  )
}
