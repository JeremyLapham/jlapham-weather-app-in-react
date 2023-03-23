import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopCards from './topCards/topCards';
import DateWeather from './dateWeatherCards/dateWeather';
import BottomBox from './bottomBox/bottomBox';
import { SearchWeatherData, GetWeatherDataForToday } from './Services/DataService';

export default function MainScreen() {
    const [dayOneDate, setDayOneDate] = useState('');
    const [dayTwoDate, setDayTwoDate] = useState('');
    const [dayThreeDate, setDayThreeDate] = useState('');
    const [dayFourDate, setDayFourDate] = useState('');
    const [dayFiveDate, setDayFiveDate] = useState('');
    const [icon1, setIcon1] = useState('');
    const [icon2, setIcon2] = useState('');
    const [icon3, setIcon3] = useState('');
    const [icon4, setIcon4] = useState('');
    const [icon5, setIcon5] = useState('');
    const [high1, setHigh1] = useState('');
    const [high2, setHigh2] = useState('');
    const [high3, setHigh3] = useState('');
    const [high4, setHigh4] = useState('');
    const [high5, setHigh5] = useState('');
    const [low1, setLow1] = useState('');
    const [low2, setLow2] = useState('');
    const [low3, setLow3] = useState('');
    const [low4, setLow4] = useState('');
    const [low5, setLow5] = useState('');
    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [weatherType, setWeatherType] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    const [input, setInput] = useState('');
    const [fiveDayWeatherType, setFiveDayWeatherType] = useState([Array(5).fill(null)])

    const [hourIcons, setHourIcons] = useState([Array(8).fill(null)]);
    const [tempArray, setTempArray] = useState([Array(8).fill(null)]);
    const [weatherTypeArray, setWeatherTypeArray] = useState([Array(8).fill(null)]);
    const [currentTimeArray, setCurrentTimeArray] = useState([Array(8).fill(null)]);

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setInput(e.target.value);
            console.log();
            const data = await SearchWeatherData(input);
            const data2 = await GetWeatherDataForToday(input);
            const dateString = data.list[5].dt_txt;
            const dateObj = new Date(dateString);
            const dayOfWeek = dateObj.toLocaleDateString("en-US", { weekday: "long" });

            const dateString2 = data.list[13].dt_txt;
            const dateObj2 = new Date(dateString2);
            const dayOfWeek2 = dateObj2.toLocaleDateString("en-US", { weekday: "long" });

            const dateString3 = data.list[21].dt_txt;
            const dateObj3 = new Date(dateString3);
            const dayOfWeek3 = dateObj3.toLocaleDateString("en-US", { weekday: "long" });

            const dateString4 = data.list[29].dt_txt;
            const dateObj4 = new Date(dateString4);
            const dayOfWeek4 = dateObj4.toLocaleDateString("en-US", { weekday: "long" });

            const dateString5 = data.list[37].dt_txt;
            const dateObj5 = new Date(dateString5);
            const dayOfWeek5 = dateObj5.toLocaleDateString("en-US", { weekday: "long" });

            const utcTime = data.list[0].dt;
            const localTime = new Date(utcTime * 1000).toLocaleString();
            const formattedTime = new Date(localTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime2 = data.list[1].dt;
            const localTime2 = new Date(utcTime2 * 1000).toLocaleString();
            const formattedTime2 = new Date(localTime2).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime3 = data.list[2].dt;
            const localTime3 = new Date(utcTime3 * 1000).toLocaleString();
            const formattedTime3 = new Date(localTime3).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime4 = data.list[3].dt;
            const localTime4 = new Date(utcTime4 * 1000).toLocaleString();
            const formattedTime4 = new Date(localTime4).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime5 = data.list[4].dt;
            const localTime5 = new Date(utcTime5 * 1000).toLocaleString();
            const formattedTime5 = new Date(localTime5).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime6 = data.list[5].dt;
            const localTime6 = new Date(utcTime6 * 1000).toLocaleString();
            const formattedTime6 = new Date(localTime6).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime7 = data.list[6].dt;
            const localTime7 = new Date(utcTime7 * 1000).toLocaleString();
            const formattedTime7 = new Date(localTime7).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime8 = data.list[7].dt;
            const localTime8 = new Date(utcTime8 * 1000).toLocaleString();
            const formattedTime8 = new Date(localTime8).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            setDayOneDate(dayOfWeek);
            setDayTwoDate(dayOfWeek2);
            setDayThreeDate(dayOfWeek3);
            setDayFourDate(dayOfWeek4);
            setDayFiveDate(dayOfWeek5);
            setIcon1(`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`);
            setIcon2(`https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`);
            setIcon3(`https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`);
            setIcon4(`https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`);
            setIcon5(`https://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`);
            setHigh1(Math.max(data.list[0].main.temp_max, data.list[1].main.temp_max, data.list[2].main.temp_max, data.list[3].main.temp_max, data.list[4].main.temp_max, data.list[5].main.temp_max, data.list[6].main.temp_max, data.list[7].main.temp_max));
            setHigh2(Math.max(data.list[8].main.temp_max, data.list[9].main.temp_max, data.list[10].main.temp_max, data.list[11].main.temp_max, data.list[12].main.temp_max, data.list[13].main.temp_max, data.list[14].main.temp_max, data.list[15].main.temp_max));
            setHigh3(Math.max(data.list[16].main.temp_max, data.list[17].main.temp_max, data.list[18].main.temp_max, data.list[19].main.temp_max, data.list[20].main.temp_max, data.list[21].main.temp_max, data.list[22].main.temp_max, data.list[23].main.temp_max));
            setHigh4(Math.max(data.list[24].main.temp_max, data.list[25].main.temp_max, data.list[26].main.temp_max, data.list[27].main.temp_max, data.list[28].main.temp_max, data.list[29].main.temp_max, data.list[30].main.temp_max, data.list[31].main.temp_max));
            setHigh5(Math.max(data.list[32].main.temp_max, data.list[33].main.temp_max, data.list[34].main.temp_max, data.list[35].main.temp_max, data.list[36].main.temp_max, data.list[37].main.temp_max, data.list[38].main.temp_max, data.list[39].main.temp_max));
            setLow1(Math.min(data.list[0].main.temp_min, data.list[1].main.temp_min, data.list[2].main.temp_min, data.list[3].main.temp_min, data.list[4].main.temp_min, data.list[5].main.temp_min, data.list[6].main.temp_min, data.list[7].main.temp_min));
            setLow2(Math.min(data.list[8].main.temp_min, data.list[9].main.temp_min, data.list[10].main.temp_min, data.list[11].main.temp_min, data.list[12].main.temp_min, data.list[13].main.temp_min, data.list[14].main.temp_min, data.list[15].main.temp_min));
            setLow3(Math.min(data.list[16].main.temp_min, data.list[17].main.temp_min, data.list[18].main.temp_min, data.list[19].main.temp_min, data.list[20].main.temp_min, data.list[21].main.temp_min, data.list[22].main.temp_min, data.list[23].main.temp_min));
            setLow4(Math.min(data.list[24].main.temp_min, data.list[25].main.temp_min, data.list[26].main.temp_min, data.list[27].main.temp_min, data.list[28].main.temp_min, data.list[29].main.temp_min, data.list[30].main.temp_min, data.list[31].main.temp_min));
            setLow5(Math.min(data.list[32].main.temp_min, data.list[33].main.temp_min, data.list[34].main.temp_min, data.list[35].main.temp_min, data.list[36].main.temp_min, data.list[37].main.temp_min, data.list[38].main.temp_min, data.list[39].main.temp_min));
            setFiveDayWeatherType([data.list[5].weather[0].main, data.list[13].weather[0].main, data.list[21].weather[0].main, data.list[29].weather[0].main, data.list[37].weather[0].main])
            setCityName(data.city.name);
            setCountryName(data.city.country);
            setWeatherType(data2.weather[0].main);
            setTemp(data2.main.temp);
            setIcon(`https://openweathermap.org/img/wn/${data2.weather[0].icon}@4x.png`);

            setHourIcons([`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@4x.png`,]);

            setTempArray([data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp, data.list[5].main.temp, data.list[6].main.temp, data.list[7].main.temp,]);

            setWeatherTypeArray([data.list[0].weather[0].main, data.list[1].weather[0].main, data.list[2].weather[0].main, data.list[3].weather[0].main, data.list[4].weather[0].main, data.list[5].weather[0].main, data.list[6].weather[0].main, data.list[7].weather[0].main,]);

            setCurrentTimeArray([formattedTime, formattedTime2, formattedTime3, formattedTime4, formattedTime5, formattedTime6, formattedTime7, formattedTime8]);
        }
    };

    useEffect(() => {
        (async () => {
            const data2 = await GetWeatherDataForToday('Stockton');
            setWeatherType(data2.weather[0].main);
            setTemp(data2.main.temp);
            setIcon(`https://openweathermap.org/img/wn/${data2.weather[0].icon}@4x.png`);
        })();
    }, []);


    useEffect(() => {
        (async () => {
            const data = await SearchWeatherData('Stockton');

            const dateString = data.list[5].dt_txt;
            const dateObj = new Date(dateString);
            const dayOfWeek = dateObj.toLocaleDateString("en-US", { weekday: "long" });

            const dateString2 = data.list[13].dt_txt;
            const dateObj2 = new Date(dateString2);
            const dayOfWeek2 = dateObj2.toLocaleDateString("en-US", { weekday: "long" });

            const dateString3 = data.list[21].dt_txt;
            const dateObj3 = new Date(dateString3);
            const dayOfWeek3 = dateObj3.toLocaleDateString("en-US", { weekday: "long" });

            const dateString4 = data.list[29].dt_txt;
            const dateObj4 = new Date(dateString4);
            const dayOfWeek4 = dateObj4.toLocaleDateString("en-US", { weekday: "long" });

            const dateString5 = data.list[37].dt_txt;
            const dateObj5 = new Date(dateString5);
            const dayOfWeek5 = dateObj5.toLocaleDateString("en-US", { weekday: "long" });

            const utcTime = data.list[0].dt;
            const localTime = new Date(utcTime * 1000).toLocaleString();
            const formattedTime = new Date(localTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime2 = data.list[1].dt;
            const localTime2 = new Date(utcTime2 * 1000).toLocaleString();
            const formattedTime2 = new Date(localTime2).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime3 = data.list[2].dt;
            const localTime3 = new Date(utcTime3 * 1000).toLocaleString();
            const formattedTime3 = new Date(localTime3).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime4 = data.list[3].dt;
            const localTime4 = new Date(utcTime4 * 1000).toLocaleString();
            const formattedTime4 = new Date(localTime4).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime5 = data.list[4].dt;
            const localTime5 = new Date(utcTime5 * 1000).toLocaleString();
            const formattedTime5 = new Date(localTime5).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime6 = data.list[5].dt;
            const localTime6 = new Date(utcTime6 * 1000).toLocaleString();
            const formattedTime6 = new Date(localTime6).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime7 = data.list[6].dt;
            const localTime7 = new Date(utcTime7 * 1000).toLocaleString();
            const formattedTime7 = new Date(localTime7).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            const utcTime8 = data.list[7].dt;
            const localTime8 = new Date(utcTime8 * 1000).toLocaleString();
            const formattedTime8 = new Date(localTime8).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


            setDayOneDate(dayOfWeek);
            setDayTwoDate(dayOfWeek2);
            setDayThreeDate(dayOfWeek3);
            setDayFourDate(dayOfWeek4);
            setDayFiveDate(dayOfWeek5);
            setIcon1(`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`);
            setIcon2(`https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`);
            setIcon3(`https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`);
            setIcon4(`https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`);
            setIcon5(`https://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`);
            setHigh1(Math.max(data.list[0].main.temp_max, data.list[1].main.temp_max, data.list[2].main.temp_max, data.list[3].main.temp_max, data.list[4].main.temp_max, data.list[5].main.temp_max, data.list[6].main.temp_max, data.list[7].main.temp_max));
            setHigh2(Math.max(data.list[8].main.temp_max, data.list[9].main.temp_max, data.list[10].main.temp_max, data.list[11].main.temp_max, data.list[12].main.temp_max, data.list[13].main.temp_max, data.list[14].main.temp_max, data.list[15].main.temp_max));
            setHigh3(Math.max(data.list[16].main.temp_max, data.list[17].main.temp_max, data.list[18].main.temp_max, data.list[19].main.temp_max, data.list[20].main.temp_max, data.list[21].main.temp_max, data.list[22].main.temp_max, data.list[23].main.temp_max));
            setHigh4(Math.max(data.list[24].main.temp_max, data.list[25].main.temp_max, data.list[26].main.temp_max, data.list[27].main.temp_max, data.list[28].main.temp_max, data.list[29].main.temp_max, data.list[30].main.temp_max, data.list[31].main.temp_max));
            setHigh5(Math.max(data.list[32].main.temp_max, data.list[33].main.temp_max, data.list[34].main.temp_max, data.list[35].main.temp_max, data.list[36].main.temp_max, data.list[37].main.temp_max, data.list[38].main.temp_max, data.list[39].main.temp_max));
            setLow1(Math.min(data.list[0].main.temp_min, data.list[1].main.temp_min, data.list[2].main.temp_min, data.list[3].main.temp_min, data.list[4].main.temp_min, data.list[5].main.temp_min, data.list[6].main.temp_min, data.list[7].main.temp_min));
            setLow2(Math.min(data.list[8].main.temp_min, data.list[9].main.temp_min, data.list[10].main.temp_min, data.list[11].main.temp_min, data.list[12].main.temp_min, data.list[13].main.temp_min, data.list[14].main.temp_min, data.list[15].main.temp_min));
            setLow3(Math.min(data.list[16].main.temp_min, data.list[17].main.temp_min, data.list[18].main.temp_min, data.list[19].main.temp_min, data.list[20].main.temp_min, data.list[21].main.temp_min, data.list[22].main.temp_min, data.list[23].main.temp_min));
            setLow4(Math.min(data.list[24].main.temp_min, data.list[25].main.temp_min, data.list[26].main.temp_min, data.list[27].main.temp_min, data.list[28].main.temp_min, data.list[29].main.temp_min, data.list[30].main.temp_min, data.list[31].main.temp_min));
            setLow5(Math.min(data.list[32].main.temp_min, data.list[33].main.temp_min, data.list[34].main.temp_min, data.list[35].main.temp_min, data.list[36].main.temp_min, data.list[37].main.temp_min, data.list[38].main.temp_min, data.list[39].main.temp_min));
            setFiveDayWeatherType([data.list[5].weather[0].main, data.list[13].weather[0].main, data.list[21].weather[0].main, data.list[29].weather[0].main, data.list[37].weather[0].main])
            setCityName(data.city.name);
            setCountryName(data.city.country);
            setHourIcons([`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@4x.png`, `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@4x.png`,]);

            setTempArray([data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp, data.list[5].main.temp, data.list[6].main.temp, data.list[7].main.temp,]);

            setWeatherTypeArray([data.list[0].weather[0].main, data.list[1].weather[0].main, data.list[2].weather[0].main, data.list[3].weather[0].main, data.list[4].weather[0].main, data.list[5].weather[0].main, data.list[6].weather[0].main, data.list[7].weather[0].main,]);

            setCurrentTimeArray([formattedTime, formattedTime2, formattedTime3, formattedTime4, formattedTime5, formattedTime6, formattedTime7, formattedTime8]);

        })();
    }, []);

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`${weatherType}`}>
            <div className='circleSun'></div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <InputGroup>
                            <Form.Control value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} className='inputField' placeholder="Search by city name" aria-label="City name" aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Col>
                </Row>
                <TopCards icon={icon} temp={temp} weatherType={weatherType} cityName={cityName} countryName={countryName} />
                <Row>
                    <div className='daysOfWeatherBox'>
                        <button className='scrollButton' onClick={scrollLeft}>{"<"}</button>
                        <div className='dateCardsContainer' ref={containerRef}>
                            <Col>
                                <DateWeather date={dayOneDate} icon={icon1} high={high1} low={low1} type={fiveDayWeatherType[0]} />
                            </Col>
                            <Col>
                                <DateWeather date={dayTwoDate} icon={icon2} high={high2} low={low2} type={fiveDayWeatherType[1]} />
                            </Col>
                            <Col>
                                <DateWeather date={dayThreeDate} icon={icon3} high={high3} low={low3} type={fiveDayWeatherType[2]} />
                            </Col>
                            <Col>
                                <DateWeather date={dayFourDate} icon={icon4} high={high4} low={low4} type={fiveDayWeatherType[3]} />
                            </Col>
                            <Col>
                                <DateWeather date={dayFiveDate} icon={icon5} high={high5} low={low5} type={fiveDayWeatherType[4]} />
                            </Col>
                        </div>
                        <button className='scrollButton' onClick={scrollRight}>{">"}</button>
                    </div>
                </Row>
                <BottomBox arrayIcons={hourIcons} arrayTemp={tempArray} arrayWeatherType={weatherTypeArray} currentTime={currentTimeArray} />
            </Container>
        </div>
    );
}