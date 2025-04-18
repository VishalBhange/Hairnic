import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

export default function Customer() {
    return (
        <div>
            <Container fluid className='bgimg mt-5 text-center text-white p-5'>
                <div className='w-50 mx-auto d-block'>
                    <h1 className='text-white fw-bold ' >Our Customer Said <span className='text-dark fw-light'>About Our Natural Shampoo</span> </h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <img src='./img/testimonial-1.jpg' alt='' className='rounded-circle img-fluid mx-auto d-block border p-2'></img>
                        <p  className='fs-4 fw-light w-75 mt-4 mx-auto d-block'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>

                        <h5 className='text-dark'>Client Name</h5>
                        <h6 className='fw-light'><em>Profession</em></h6>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='./img/testimonial-2.jpg' alt='' className='rounded-circle img-fluid mx-auto d-block border p-2'></img>
                    <p  className='fs-4 fw-light w-75 mt-4 mx-auto d-block'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>

                    <h5 className='text-dark'>Client Name</h5>
                        <h6 className='fw-light'><em>Profession</em></h6>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='./img/testimonial-3.jpg' alt='' className='rounded-circle img-fluid mx-auto d-block border p-2'></img>
                        <p  className='fs-4 fw-light w-75 mt-4 mx-auto d-block'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>

                        <h5 className='text-dark'>Client Name</h5>
                        <h6 className='fw-light'><em>Profession</em></h6>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </div>
    )
}
