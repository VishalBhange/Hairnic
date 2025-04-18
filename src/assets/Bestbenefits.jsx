import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiNike } from "react-icons/si";
import { FaCheck } from "react-icons/fa";



export default function 
() {
  return (
    <div>
        <Container fluid>
            <div className='text-center mt-5'>
            <h1 className='fw-light'>Best Benefits Of Our <span className='fw-bold' style={{color:'#90bc79'}}> Natural </span></h1>
            <h1 className='fw-bold' style={{color:'#90bc79'}}>Hair Shampoo</h1>

            <p className='mt-4 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p> malesuada consequat, nibh erat tempus risus.</p></p>
            </div>

            {/* <Row className='mt-5 p-2'>
                <Col className='col-4 mt-3'>
                
                    <Row >
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike'/>
                     </div></Col>
                     
                     <Col className='col-9'>
                     <h5><b>Natural & Organic </b></h5 >
                        <hr className='w-25 bg-success my-2 border-2' />
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                   

                    </Row>

                    <Row className='mt-2'>
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike '/>
                     </div></Col>
                     <Col className='col-9'>
                     <h5><b>Anti Hair Fall</b></h5 >
                        <hr className='w-25 bg-success my-2 border-2' />
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                
                    </Row>  

                    <Row className='mt-2'>
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike '/>
                     </div></Col>
                     <Col className='col-9'>
                     <h5><b>Anti-dandruff</b></h5 >
                        <hr className='w-25 bg-success my-2  border-2' />
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                
                    </Row>          
                </Col>
                

                <Col className='col-4'>
                <img src='./img/shampoo.png' className='img-fluid image' style={{height:'350px'}}/>
                </Col>

                <Col className='col-4 mt-3'>
                <Row >
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike '/>
                     </div></Col>
                     
                     <Col className='col-9'>
                     <h5><b>No Internal Side Effect </b></h5 >
                        <hr className='w-25 bg-success my-2 border-2' />
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                   

                    </Row>

                    <Row className='mt-2'>
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike '/>
                     </div></Col>
                     <Col className='col-9'>
                     <h5><b>No Skin Irritation</b></h5 >
                        <hr className='w-25 bg-success my-2  border-2'/>
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                
                    </Row>  

                    <Row className='mt-2'>
                        <Col className='col-3'><div style={{border:'2px solid #d5f3d5', borderRadius:'50px',width:'80px', height:'80px'}} ><FaCheck  className='ms-2 mb-2'  className='fs-1 ms-4 mt-3 SiNike '/>
                     </div></Col>
                     <Col className='col-9'>
                     <h5><b>No Artificial Smell</b></h5 >
                        <hr className='w-25 bg-success   my-2  border-2' />
                        <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                        </Col>                
                    </Row>       
                
                </Col>
            </Row>
 */}

<Row className='mt-4'>
            <Col>
            {/* Natural and organic */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2'/></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Natural</span> & Organic</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>      
            </div>
            {/* Anti hair fall */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2' /></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Anti Hai</span>r Fall </h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* Anti Dandruff */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2' /></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>Anti-da</span>ndruff</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            </Col>
            <Col>
            <img src='./img/shampoo.png' alt='' className='img-fluid mx-auto d-block w-100 image'/>
            </Col>
            <Col>
            {/* No internal side effect */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2' /></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Inter</span>nal Side Effect</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No skin irritation */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2' /></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Skin</span> Irritation </h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No Artificial smell */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><FaCheck  className='ms-2 mb-2' /></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Artif</span>icial Smell</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div></Col>
        </Row>

        </Container>
    </div>
  )
}
