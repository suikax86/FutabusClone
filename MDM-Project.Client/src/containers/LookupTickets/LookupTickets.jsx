import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

import './LookupTickets.scss';
import Header from '../HomePages/Header';


const LookupTickets = () => {

    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);

    const showTicket = () => {
        setIsOpen(true);
    };

    const closeTicket = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (
            drawerRef.current &&
            !drawerRef.current.contains(event.target) &&
            isOpen
        ) {
            closeTicket();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    const [formLookup, setFormLookup] = useState({
        phoneNumber: '',
        ticketID: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormLookup({
            ...formLookup,
            [name]: value
        });
    };
    const [ticketData, setTicketData] = useState({});
    const fetchTicketData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/tickets/${formLookup.ticketID}/${formLookup.phoneNumber}`);
            setTicketData(response.data);
        } catch (error) {
            console.error('Failed to fetch ticket data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetchTicketData();
        showTicket()
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className = 'layout'>
                    <div className='lookup-title'>TRA CỨU THÔNG TIN ĐẶT VÉ</div>
                    <form action="#" onSubmit={(e) => handleSubmit(e)}>
                        <Container>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Vui lòng nhập số điện thoại'
                                                  name='phoneNumber'
                                                  value={formLookup.phoneNumber}
                                                  onChange={handleChange}
                                                  required
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Vui lòng nhập mã vé'
                                                  name='ticketID'
                                                  value={formLookup.ticketID}
                                                  onChange={handleChange}
                                                  required
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                        </Container>
                        <div className='d-flex justify-content-center position-relative w-100'>
                            <Button variant="primary" type='submit' className='btn-lookup-tickets'>
                                Tra cứu vé
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            <div className={`${isOpen ? "d-block" : "d-none"}`}>
                <div className='overLay'></div>
                <div className='ticket-layout'>
                    <div ref={drawerRef} className='ticket-window'>
                        <div className='ticket-modal-content'>
                            <div className='ticket-modal-header'>
                                <h3>
                                    Mã vé xe:
                                    <span> {formLookup.ticketID} </span>
                                </h3>
                                <button type="button" className="btn-close-ticket-modal"
                                        data-modal-toggle="edit-user-modal"
                                        onClick={closeTicket} >
                                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='ticket-modal-body'>
                                <form>
                                    <Container className='ticket-basic-info'>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Họ tên: </label>
                                                    <Form.Control type='text' value={"Long Huynh"}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Email: </label>
                                                    <Form.Control type='text' value={"suikax86@gmail.com"}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Số điện thoại: </label>
                                                    <Form.Control type='text' value={"0888703040"}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className='ticket-detail'>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Mã Bus: </label>
                                                    <Form.Control type='text' value={ticketData.busId}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Mã khách hàng: </label>
                                                    <Form.Control type='text' value={ticketData.customerId}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Giờ khởi hành: </label>
                                                    <Form.Control type='text' value={ticketData.departureTime}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Địa điểm đi: </label>
                                                    <Form.Control type='text' value={ticketData.departureLocation}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Thời gian đến: </label>
                                                    <Form.Control type='text' value={ticketData.arrivalTime}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Địa điểm đến: </label>
                                                    <Form.Control type='text' value={ticketData.arrivalLocation}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex'>
                                                <Form.Group className='form-group-ticket special-input'>
                                                    <label className='fw-bold form-label-ticket'>Điểm đón: </label>
                                                    <Form.Control type='text' value={ticketData.boardingPoint}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex'>
                                                <Form.Group className='form-group-ticket special-input'>
                                                    <label className='fw-bold form-label-ticket'>Điểm xuống: </label>
                                                    <Form.Control type='text' value={ticketData.droppingPoint}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Loại xe bus: </label>
                                                    <Form.Control type='text' value={ticketData.busType}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Tổng tiền vé: </label>
                                                    <Form.Control type='text' value={ticketData.totalFare}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-ticket'>
                                                    <label className='fw-bold form-label-ticket'>Danh sách ghế đặt: </label>
                                                    <Form.Control type='text' value={ticketData.seats}
                                                                  className='form-control-ticket' disabled
                                                    ></Form.Control>
                                                </Form.Group>

                                            </Col>
                                        </Row>
                                        <Row>

                                        </Row>
                                    </Container>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default LookupTickets