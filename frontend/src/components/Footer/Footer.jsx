import React from 'react'
import './footer.css'

import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";


const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];

const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];



const Footer = () => {
  return (
    <footer>
      <Container>
          <Row>
            <Col lg='3'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Explicabo nulla sint pariatur iste beatae accusamus minus ipsam voluptatum ex architecto.</p>

                      <div className='social__links d-flex align-items-center gap-4'>
                            <span>
                              <Link to='#'><i class="ri-youtube-fill"></i></Link>
                            </span>

                            <span>
                              <Link to='#'><i class="ri-github-line"></i></Link>
                            </span>

                            <span>
                              <Link to='#'><i class="ri-facebook-line"></i></Link>
                            </span>


                      </div>
                </div>
            </Col>
            <Col lg='3'>
              <h5 className='footer__link-title'>Discover</h5>

              <ListGroup className='footer__quick-links'>
                  {
                    quick__links.map((item,index) =>(
                      <ListGroupItem key={index} className='ps-0 border-0'>
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                    ))
                  }
              </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>

<ListGroup className='footer__quick-links'>
    {
      quick__links2.map((item,index) =>(
        <ListGroupItem key={index} className='ps-0 border-0'>
          <Link to={item.path}>{item.display}</Link>
        </ListGroupItem>
      ))
    }
</ListGroup>

            </Col>
            <Col lg='3'>
              <h5 className='footer__link-title'>Contact</h5>

              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className='mb-0'>Sylhet,Bangladesh</p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-send-line"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>ashiqurrahman081@gmail.com</p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-smartphone-line"></i></span>
                    Number:
                  </h6>
                  <p className='mb-0'>+8801825806917</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
      </Container>
    </footer>
  )
}

export default Footer
