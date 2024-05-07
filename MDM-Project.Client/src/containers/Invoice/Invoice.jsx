import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

import './Invoice.scss';
import Header from '../HomePages/Header';

const Invoice = () => {

    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);

    const [invoiceData, setInvoiceData] = useState('');

    const [formLookupInvoice, setFormLookupInVoice] = useState({
        phoneNumber: '',
        invoiceID: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormLookupInVoice({
            ...formLookupInvoice,
            [name]: value
        });
    };

    const showInvoice = () => {
        setIsOpen(true);
    };

    const closeInvoice = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (
            drawerRef.current &&
            !drawerRef.current.contains(event.target) &&
            isOpen
        ) {
            closeInvoice();
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formLookupInvoice.phoneNumber, formLookupInvoice.invoiceID);
        try {
            const response = await axios.get(`http://localhost:8080/api/invoices/phone/${formLookupInvoice.phoneNumber}/invoiceID/${formLookupInvoice.invoiceID}`);
            if (response.status === 200) {
                setInvoiceData(response.data);
                console.log(response.data);
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            const message = error.response?.data?.message || 'An error occurred';
            alert(message)
        }
        showInvoice()
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className = 'layout'>
                    <div className='lookup-invoice-title'>TRA CỨU THÔNG TIN HÓA ĐƠN</div>
                    <form action="#" onSubmit={(e) => handleSubmit(e)}>
                        <Container>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Số điện thoại'
                                                  name='phoneNumber'
                                                  value={formLookupInvoice.phoneNumber}
                                                  onChange={handleChange}
                                                  required
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Mã hóa đơn'
                                                  name='invoiceID'
                                                  value={formLookupInvoice.invoiceID}
                                                  onChange={handleChange}
                                                  required
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                        </Container>
                        <div className='d-flex justify-content-center position-relative w-100'>
                            <Button variant="primary" type='submit' className='btn-lookup-invoice'>
                                Tra cứu hóa đơn
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            <div className={`${isOpen ? "d-block" : "d-none"}`}>
                <div className='overLay'></div>
                <div className='invoice-layout'>
                    <div ref={drawerRef} className='invoice-window'>
                        <div className='invoice-modal-content'>
                            <div className='invoice-modal-header'>
                                <h3>
                                    Hóa đơn: <span>{invoiceData.invoiceID}</span>
                                </h3>
                                <button type="button" className="btn-close-invoice-modal"
                                        data-modal-toggle="edit-user-modal"
                                        onClick={closeInvoice} >
                                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='invoice-modal-body'>
                                {/* <form action="#" onSubmit={(e) => handleSubmit(e)}> */}
                                <form>
                                    <Container className='invoice-basic-info'>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Họ tên: </label>
                                                    <Form.Control type='text' value={invoiceData.name}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Tổng giá vé: </label>
                                                    <Form.Control type='text' value={invoiceData.price}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Số điện thoại: </label>
                                                    <Form.Control type='text' value={invoiceData.phone}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>PTTT: </label>
                                                    <Form.Control type='text' value={invoiceData.paymentMethod}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Email: </label>
                                                    <Form.Control type='text' value={invoiceData.email}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Trạng thái: </label>
                                                    <Form.Control type='text' value={invoiceData.status}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className='invoice-detail'>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Tuyến xe: </label>
                                                    <Form.Control type='text' value={invoiceData.buses}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Xuất bến: </label>
                                                    <Form.Control type='text' value={invoiceData.time}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <Form.Group className='form-group-invoice'>
                                                    <label className='fw-bold form-label-invoice'>Số ghế: </label>
                                                    <Form.Control type='text' value={invoiceData.seats}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex'>
                                                <Form.Group className='form-group-invoice special-input'>
                                                    <label className='fw-bold form-label-invoice'>Điểm lên xe: </label>
                                                    <Form.Control type='text' value={invoiceData.boardingPoint}
                                                                  className='form-control-invoice' disabled
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
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

export default Invoice