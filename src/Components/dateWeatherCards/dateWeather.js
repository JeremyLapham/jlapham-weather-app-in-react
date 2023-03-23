import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './dateWeather.css';

export default function DateWeather(props) {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Container>
            <Row>
                <button className={isClicked ? 'infoBoxClicked' : 'infoBox'} onClick={handleClick}>
                    <h2>{props.date}</h2>
                    <Row>
                        <Col lg={4}>
                            <img src={props.icon} alt='1-5 weather forecast icon' />
                        </Col>
                        <Col lg={4}>
                            <p>{isClicked ? `${props.type}` : ''}</p>
                        </Col>
                        <Col lg={4}>
                            <p>High: {Math.round(props.high)}</p>
                            <p>Low: {Math.round(props.low)}</p>
                        </Col>
                    </Row>
                </button>
            </Row>
        </Container>
    )
}
