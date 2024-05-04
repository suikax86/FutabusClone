import React, { useEffect, useState, useRef } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import './Payment.scss';
import Header from '../HomePages/Header';

const Payment = () => {
    const location = useLocation();

    // Lấy thông tin từ trang booking
    const busId = location.state.busId;
    const customerId = location.state.customerId;
    const seats = location.state.seats;
    const totalPrice = location.state.totalPrice;
    const boardingPoints = location.state.boardingPoints;
    const droppingPoints = location.state.droppingPoints;
    const boardingTimes = location.state.boardingTimes;
    const [paymentMethod, setPaymentMethod] = useState('ZaloPay');

    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00");
    const [isTimeUp, setTimeUp] = useState(false);

    const navigate = useNavigate();

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        return {
            total,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }

        if (total <= 0 && !isTimeUp) {
            setTimeUp(true);
            navigate(-1);
        }
    };

    const clearTimer = (e) => {
        setTimer("20:00");
 
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setMinutes(deadline.getMinutes() + 20);
        // deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const turnBack = () => {
        navigate(-1);
    }
    
    return (
        <React.Fragment>
            <Header />
            <section className='payment-layout'>
                <div className='payment-frame'>
                    <div className='payment-header'>
                        <div className='p-4 d-flex' style={{height: "2.5rem", fontSize: '13px', alignItems: "center", cursor: "pointer"}}
                            onClick={turnBack}>
                            Quay lại
                        </div>
                        <div className='payment-header-buses'>
                            <p style={{ fontSize: '28px'}}>{boardingPoints} => {droppingPoints} </p>
                            <span style={{ fontSize: '15px', marginTop: "0.5rem"}}>{boardingTimes}</span>
                        </div>
                        <div style={{ width: '5rem'}}></div>
                    </div>
                    <div className='payment-content'>
                        <div className='payment-method'>
                            <div style={{ fontSize: '1.25rem', lineHeight: "1.75rem", fontWeight: "500"}}>Chọn phương thức thanh toán</div>
                            <div className='payment-method-group'>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" id="ZaloPay" onClick={() => setPaymentMethod('ZaloPay')} checked={paymentMethod === 'ZaloPay'}/>
                                    <div className='d-flex' style={{ width: "100%", alignItems: "center"}} for="ZaloPay" onClick={() => setPaymentMethod('ZaloPay')}>
                                        <img src='https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg'/>
                                        <span>ZaloPay</span>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" id="ATM" onClick={() => setPaymentMethod('ATM')} checked={paymentMethod === 'ATM'}/>
                                    <div className='d-flex' style={{ width: "100%", alignItems: "center"}} for="ATM" onClick={() => setPaymentMethod('ATM')}>
                                        <img src='https://storage.googleapis.com/futa-busline-web-cms-prod/atn_logo_fd4ba999a5/atn_logo_fd4ba999a5.png'/>
                                        <span>Thẻ ATM nội địa</span>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" id="ATM" onClick={() => setPaymentMethod('Visa')} checked={paymentMethod === 'Visa'}/>
                                    <div className='d-flex' style={{ width: "100%", alignItems: "center"}} for="Visa" onClick={() => setPaymentMethod('Visa')}>
                                        <img src='https://storage.googleapis.com/futa-busline-web-cms-prod/visa_logo_3d2a20b162/visa_logo_3d2a20b162.png'/>
                                        <span>Thẻ Visa/Master/JCB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='payment-amount'>
                            <span>Tổng thanh toán</span>
                            <span style={{ fontSize: '44px', fontWeight: "500", color: "#ef5222"}}>{totalPrice}</span>
                            <span style={{ marginTop: "10px", fontSize: '14px'}}>Thời gian giữ chỗ còn lại {timer}</span>
                        </div>
                        <div style={{ width: "320px"}}>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Payment