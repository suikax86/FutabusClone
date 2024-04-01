import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './HomePage.scss';

import Header from "./Header";

const HomePage = () => {

    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const { kindOfStand } = item;

    const today = new Date(); // Lấy ngày hôm nay
    const [selectedDate, setSelectedDate] = useState(today);

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);
    
        setItem(prevState => ({
          ...prevState,
          kindOfStand: e.target.value
        }));
      };

    return (
        <React.Fragment>
            <Header />
            <main>
                <section className='main-layout'>
                    <div className='banner-search'>
                        <div className='homepage-banner'>
                            <img src='https://storage.googleapis.com/futa-busline-web-cms-prod/Artboard_2_8_c5af86ae89/Artboard_2_8_c5af86ae89.png'/>
                        </div>
                        <div className='search-form'>
                            <form>
                                <Form.Group className='select-1-frame'>
                                    <Form.Check
                                        className='select-1-child-content'
                                        value="một chiều"
                                        type="radio"
                                        aria-label="radio 1"
                                        label="Một chiều"
                                        onChange={handleChange}
                                        checked={kindOfStand === "một chiều"}
                                    />
                                    <Form.Check
                                        className='select-1-child-content'
                                        value="khứ hồi"
                                        type="radio"
                                        aria-label="radio 2"
                                        label="Khứ hồi"
                                        onChange={handleChange}
                                        checked={kindOfStand === "khứ hồi"}
                                    />
                                </Form.Group>
                                <Container className='select-2-frame'>
                                    <Row>
                                        <Col className='d-flex me-2'>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Điểm đi</Form.Label>
                                                <Form.Control style={{height: '70px'}} size="lg" type="text" placeholder="Tp. Hồ Chí Minh" />
                                            </Form.Group>
                                            <img className="switch-location mb-3" 
                                            src="https://futabus.vn/images/icons/switch_location.svg" 
                                            alt="switch location icon" />
                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Điểm đến</Form.Label>
                                                <Form.Control style={{height: '70px'}} size="lg" type="text" placeholder="Hà Nội" />
                                            </Form.Group>
                                        </Col>
                                        <Col className='d-flex ms-2 justify-content-between'>
                                            <Form.Group className="mb-3 date-width">
                                                <Form.Label className='fw-bold'>Ngày đi</Form.Label>
                                                <div style={{ position: "relative"}}>
                                                    <DatePicker
                                                        selected={selectedDate}
                                                        onChange={(date) => setSelectedDate(date)}
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholder = '30/03/2024'
                                                        className="form-control form-control-lg custom-datepick"
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3 date-width">
                                                <Form.Label className='fw-bold'>Ngày về</Form.Label>
                                                <div style={{ position: "relative"}}>
                                                    <DatePicker
                                                        selected={selectedDate}
                                                        onChange={(date) => setSelectedDate(date)}
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholder = '30/03/2024'
                                                        className="form-control form-control-lg custom-datepick"
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Ngày về</Form.Label>
                                                <Form.Select className='select-custom' defaultValue="1">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className='d-flex justify-content-center position-relative w-100'>
                                    <Button variant="primary" type="submit" className='btn-search-homepage'>
                                        Tìm chuyến xe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default HomePage