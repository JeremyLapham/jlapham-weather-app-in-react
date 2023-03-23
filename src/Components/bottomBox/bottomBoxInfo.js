import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function BottomBoxInfo(props) {
  return (
    <Container className='boxInfoSize'>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ marginTop: '40px' }} src={props.icon} alt='images for the time cards' />
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontSize: '60px', marginTop:'3rem' }}>{Math.round(props.arrayTemp)} °F</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontSize: '30px', marginTop:'4rem' }}>{props.arrayWeatherType}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontSize: '40px', display: 'flex', justifyContent: 'center', marginTop: '2.5rem', borderTop: '1px solid' }}>{props.currentTime}</p>
        </Col>
      </Row>
    </Container>
  )
}
