import React from 'react'
import '../styles/home.css'

import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList'

import FeaturedTourList from '../components/Feature-tours/FeaturedTourList'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'know Before you Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travelling opens the door to creating {" "}
                  <span className='highlight'>
                   memories</span></h1>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt quod? Explicabo, aspernatur dicta laboriosam velit tempore doloribus culpa aliquid veritatis?
                     Ea minus ipsam, aspernatur laboriosam sequi ipsum tenetur! Eveniet.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg02} alt="" />
              </div>
            </Col>
              <SearchBar />
          </Row>
        </Container>
      </section>

<section>
  <Container>
    <Row>
      <Col lg='3'>
         <h5 className='services__subtitle'>What we serve</h5>
         <h1 className='services__title'>We offer our best services</h1>
      </Col>
      <ServiceList />
    </Row>
  </Container>

</section>
   
   <section>
    <Container>
      <Row>
        <Col lg="12" className='mb-5'>
          <Subtitle subtitle={"Explore"} />
          <h2 className='featured__tour-title'>Our feature tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
   </section>

    </>
  )
}

export default Home
