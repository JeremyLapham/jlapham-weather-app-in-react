import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import BottomBoxInfo from './bottomBoxInfo';
import './bottomBox.css';

export default function BottomBox(props) {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -800,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 800,
            behavior: 'smooth'
        });
    };
    return (
        <Container className='d-flex justify-content-center'>
            <Row className='bottomBox'>
                <h1 style={{ color: 'white' }}>3 Hour Interval</h1>
                <div className='boxes'>
                    <button className='scrollButton2' onClick={scrollLeft}>{"<"}</button>
                    <div className='dateCardsContainer' ref={containerRef}>
                        <BottomBoxInfo icon={props.arrayIcons[0]} arrayTemp={props.arrayTemp[0]} arrayWeatherType={props.arrayWeatherType[0]} currentTime={props.currentTime[0]} />
                        <BottomBoxInfo icon={props.arrayIcons[1]} arrayTemp={props.arrayTemp[1]} arrayWeatherType={props.arrayWeatherType[1]} currentTime={props.currentTime[1]} />
                        <BottomBoxInfo icon={props.arrayIcons[2]} arrayTemp={props.arrayTemp[2]} arrayWeatherType={props.arrayWeatherType[2]} currentTime={props.currentTime[2]} />
                        <BottomBoxInfo icon={props.arrayIcons[3]} arrayTemp={props.arrayTemp[3]} arrayWeatherType={props.arrayWeatherType[3]} currentTime={props.currentTime[3]} />
                        <BottomBoxInfo icon={props.arrayIcons[4]} arrayTemp={props.arrayTemp[4]} arrayWeatherType={props.arrayWeatherType[4]} currentTime={props.currentTime[4]} />
                        <BottomBoxInfo icon={props.arrayIcons[5]} arrayTemp={props.arrayTemp[5]} arrayWeatherType={props.arrayWeatherType[5]} currentTime={props.currentTime[5]} />
                        <BottomBoxInfo icon={props.arrayIcons[6]} arrayTemp={props.arrayTemp[6]} arrayWeatherType={props.arrayWeatherType[6]} currentTime={props.currentTime[6]} />
                        <BottomBoxInfo icon={props.arrayIcons[7]} arrayTemp={props.arrayTemp[7]} arrayWeatherType={props.arrayWeatherType[7]} currentTime={props.currentTime[7]} />
                    </div>
                    <button className='scrollButton2' onClick={scrollRight}>{">"}</button>
                </div>
            </Row>
        </Container>
    )
}
