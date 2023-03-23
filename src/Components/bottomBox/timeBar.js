import React from 'react';
import { Col } from 'react-bootstrap';
import './bottomBox.css';

export default function TimeBar() {
  return (
    <div className='time-bar'>
      <Col>3am</Col>
      <Col>6am</Col>
      <Col>9am</Col>
      <Col>12pm</Col>
      <Col>3pm</Col>
      <Col>6pm</Col>
      <Col>9pm</Col>
      <Col>12am</Col>
    </div>
  );
};