import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carddata from '../Components/Carddata'
import cardimg1 from '../Images/download (2).jpg'
import cardimg2 from '../Images/download.jpg'
import cardimg3 from '../Images/download (1).jpg'
import cardimg4 from '../Images/download (3).jpg'


const Cards = () => {
    return (
        <>  
        <Container>
            <Row>
                <Col md={3} sm={3}>
                    <Carddata 
                        title="We provide Rent a car service from Karachi,
                         Hyderabad, Tando Adam, Matli, Sehwan, islamkot,
                          Sukkur, and other parts of Sindh. "
                        img={cardimg1}
                    />
                </Col>
                <Col md={3} sm={3}>
                    <Carddata
                    title="Global Brands Coverage. 100% On-time Shipment Protection.
                     Shop Online Today! Logistics Service. Production Monitoring" 
                      img={cardimg2}  
                    />
                </Col>
                <Col md={3} sm={3}>
                    <Carddata
                      title="A hamburger (or burger for short) is a food, 
                      typically considered a sandwich, consisting of one or
                       more cooked patties—usually ground meat, typically
                        
"
                      img={cardimg3}  />
                </Col>
                <Col md={3} sm={3}>
                    <Carddata
                      title="Meaning of beg in English ... to make 
                       very strong and urgent request: They begged for 
                       mercy. [ + speech ] Please, please forgive me! 
                       she begged (him). [ + obj ...
"
                      img={cardimg4}  />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Cards
