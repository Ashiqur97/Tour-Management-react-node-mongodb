import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import WeatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customization from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: WeatherImg,
        title: "Calculate Weather",
        desc: "lorem ipsum dolor site"
    },
    {
        imgUrl:guideImg,
        title: "Best Tour Guide",
        desc: "lorem ipsum dolor site"
    },
    {
        imgUrl: customization,
        title: "Customization",
        desc: "lorem ipsum"
    },
    

]
const ServiceList = () => {
  return (
 <>
    {servicesData.map((item,index) =>(
        <Col lg="3" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
 </>
  )
}

export default ServiceList
