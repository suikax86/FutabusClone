import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './LookupTickets.scss';
import Header from '../HomePages/Header';


const LookupTickets = () => {
    
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formLookup);
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className = 'layout'>
                    <div className='lookup-title'>TRA CỨU THÔNG TIN ĐẶT VÉ</div>
                    <form onSubmit={handleSubmit}>
                        <Container>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Vui lòng nhập số điện thoại'
                                                name='phoneNumber'
                                                value={formLookup.phoneNumber}
                                                onChange={handleChange}
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Vui lòng nhập mã vé'
                                                name='ticketID'
                                                value={formLookup.ticketID}
                                                onChange={handleChange}
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
        </React.Fragment>
    )
}


export default LookupTickets