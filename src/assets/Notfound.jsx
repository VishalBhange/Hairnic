import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { BiSolidError } from "react-icons/bi";


export default function Notfound() {
  return (
    <div>
         <Container fluid>
      <div className='bgimg p-5 text-center mb-4 text-white mb-5'>
          <h1>404 Error</h1>
          <div className='d-flex align-item-center justify-content-center'>
            <a href='#' className='text-white '>Home / </a>
            <a href='#' className='text-white '>Pages</a> 
            <a href='#' className='text-white '>Products</a>            
          </div>
        </div>
      </Container>

      <Container className='mt-5 mb-5 text-center'>.
        <BiSolidError className='fs-1' style={{color:'#90bc79'}}/>
        <h1 className='fw-bold'>4O4</h1>
         <h3 className='fw-bold'>Page Not Found</h3>
 
        <p>We’re sorry, the page you have looked for does not exist in our website! Maybe
       <p>go to our home page or try to use a search?</p></p>
       <Button className='px-4 fs-5 mt-3' style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Go Back To Home</Button>
     </Container>

    </div>
  )
}
