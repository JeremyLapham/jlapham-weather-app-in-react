import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './topCards.css';
import { removeFromLocalStorage, getLocalStorage, saveToLocalStorageByCity } from '../Services/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function TopCards(props) {

    const [favorites, setFavorites] = useState([]);

    const handleLocalStorage = () => {
        let favoritesArray = getLocalStorage();
        if (!favoritesArray.includes(props.cityName)) {
            saveToLocalStorageByCity(props.cityName);
        }
        setFavorites(getLocalStorage());
    };

    const removeStorage = (city) => {
        removeFromLocalStorage(city);
        setFavorites(getLocalStorage());
    };

    useEffect(() => {
        setFavorites(getLocalStorage());
    }, []);

    return (
        <Container>
            <Row>
                <Col lg={7} sm={12}>
                    <div className='topBox'>
                        <h1 className='currentTxt'>Current Weather</h1>
                        <Row className='insidePlacing'>
                            <Col lg={3}>
                                <img className='topIcon' src={props.icon} alt='weather type icon' />
                            </Col>
                            <Col lg={4}>
                                <h1 className='tempNow' >{Math.round(props.temp)} °F</h1>
                            </Col>
                            <Col lg={2}>
                                <p className='typeCitySize'>{props.weatherType}</p>
                            </Col>
                            <Col lg={2}>
                                <p className='d-inline typeCitySize'>{props.cityName}, {props.countryName}</p>
                                <FontAwesomeIcon className='starSize' onClick={handleLocalStorage} icon={faStar} />
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col lg={5} sm={12}>
                    <h1 className='favTxt'>Favorites</h1>
                    <div className='favBox'>
                        {favorites.map(city => {
                            return (
                                <Row key={city} style={{ marginTop: '12px' }}>
                                    <Col>
                                        <h2 style={{ marginLeft: '30px' }}>{city}</h2>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <Button variant='danger' onClick={() => removeStorage(city)} style={{ fontSize: '20px' }}>Delete</Button>
                                    </Col>
                                </Row>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
