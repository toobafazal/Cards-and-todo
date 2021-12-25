import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import cardimg1 from '../Images/download (2).jpg'


const Carddata = (props) => {
  const navigate = useNavigate();
  const sendData = () => {
      navigate("/card_description")
  };
    return (
        <div>
            <Card  className="Card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    
    <Button variant="primary" onClick={sendData}>Click here</Button>
  </Card.Body>
        </Card>
        </div>
    )
}

export default Carddata
