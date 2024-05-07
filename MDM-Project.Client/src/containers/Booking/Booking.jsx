import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './Booking.scss';
import '../HomePages/HomePage.scss'
import Header from '../HomePages/Header';

import dropdown from '/img/caret-down.svg';

const Booking = () => {
    const DISABLED_SEAT = 'https://futabus.vn/images/icons/seat_disabled.svg';
    const ACTIVATE_SEAT = 'https://futabus.vn/images/icons/seat_active.svg';
    const SELECTED_SEAT = 'https://futabus.vn/images/icons/seat_selecting.svg';

    //const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    
    const[gheTangTren,setGheTangTren] = useState(Array.from({ length: 6 }, () => Array(3).fill('')));
    const[gheTangDuoi,setGheTangDuoi] = useState(Array.from({ length: 6 }, () => Array(3).fill('')));

    const[DiemDon, setDiemDon] = useState("");
    const[DiemTra, setDiemTra] = useState("");

    const[DSDiemDon,setDSDiemDon] = useState(['A','B','C']);
    const[DSDiemTra,setDSDiemTra] = useState(['X','Y','Z']);

    const navigate = useNavigate();

    const huongdan = () => {
        navigate('/huongdan');
    }

    const timchuyen = () => {
        navigate('/dat-ve')
    }
  

    return (
        <React.Fragment>
            <Header />
            <main>
                <section className='booking'>
                    <div class="tt-dat-ve row">

                    
                        <div class="col-7">
                            
                            <div class="chon-ghe row">
                                <h3>
                                    Chọn ghế
                                </h3>
                                
                                <div class="col" align="center">
                                    <h4>
                                        Tầng dưới
                                    </h4>
                                    {gheTangDuoi.map( (item, index) => (
                                        <>
                                        <div class="row">
                                            <div class="col ghe">
                                                <img src={ACTIVATE_SEAT} />
                                                <h5>
                                                    {index * 3 + 1 >= 10 ? 'A' : 'A0'}{index * 3 + 1} 
                                                </h5>
                                            </div>

                                            <div class="col ghe">
                                                <img src={DISABLED_SEAT} />  
                                                <h5>
                                                    {index * 3 + 2 >= 10 ? 'A' : 'A0'}{index * 3 + 2} 
                                                </h5>
                                            </div>

                                            <div class="col ghe">
                                                <img src={SELECTED_SEAT} />
                                                <h5>
                                                    {index * 3 + 3 >= 10 ? 'A' : 'A0'}{index * 3 + 3} 
                                                </h5>
                                            </div>                                  
                                        </div>
                                        </>
                                    ))}
                                    
                                </div>

                                <div class="col" align="center">
                                    <h4>
                                        Tầng trên
                                    </h4>
                                    {gheTangTren.map( (item, index) => (
                                        <>
                                        <div class="row">
                                            <div class="col ghe">
                                                <img src={ACTIVATE_SEAT} />
                                                <h5>
                                                    {index * 3 + 1 >= 10 ? 'A' : 'A0'}{index * 3 + 1} 
                                                </h5>
                                            </div>

                                            <div class="col ghe">
                                                <img src={DISABLED_SEAT} />  
                                                <h5>
                                                    {index * 3 + 2 >= 10 ? 'A' : 'A0'}{index * 3 + 2} 
                                                </h5>
                                            </div>

                                            <div class="col ghe">
                                                <img src={SELECTED_SEAT} />
                                                <h5>
                                                    {index * 3 + 3 >= 10 ? 'A' : 'A0'}{index * 3 + 3} 
                                                </h5>
                                            </div>                              
                                        </div>
                                        </>
                                    ))}
                                </div>

                                <div class="col-4 color-detail">
                                    <div class="gray"></div> 
                                    <p>Đã bán</p>
                                    <br />

                                    <div class="blue"></div>
                                    <p>Còn trống</p>
                                    <br />
                                    <div class="orange"></div>
                                    <p>Đang chọn</p>
                                </div>
                            </div>
                            
                            <div class="thong-tin-khach">
                                <h3>
                                    Thông tin khách hàng
                                </h3>
                                <form>
                                    <div class="">
                                        <label for="hoten" class="form-label">Họ tên</label>
                                        <input type="text" class="form-control" id="hoten" />
                                    </div>
                                    
                                    <div class="">
                                        <label for="sdt" class="form-label">Số điện thoại</label>
                                        <input type="text" class="form-control" id="sdt" />
                                    </div>

                                    <div class="">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="email" />
                                    </div>
                                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                                </form>
                            </div>

                            <div class="don-tra row">
                                <h3>
                                    Thông tin đón trả
                                </h3>
                                <div class="col">
                                    <h4>
                                        ĐIỂM ĐÓN
                                    </h4>

                                    <div class="dropdown">
                                        <div class="DiaDiem-btn" data-bs-toggle="dropdown">
                                            {DiemDon}
                                        </div>

                                        <ul class="dropdown-menu">
                                            {DSDiemDon.map(item => (
                                                <li><a class="dropdown-item" onClick={() => {setDiemDon(item)}}>{item}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="vertical-line"></div>

                                <div class="col">
                                    <h4>
                                        ĐIỂM TRẢ
                                    </h4>

                                    <div class="dropdown">
                                        <div class="DiaDiem-btn" data-bs-toggle="dropdown">
                                            {DiemTra}
                                        </div>

                                        <ul class="dropdown-menu">
                                            {DSDiemTra.map(item => (
                                                <li><a class="dropdown-item" onClick={() => {setDiemTra(item)}}>{item}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col ">
                            <div class="thong-tin-luot-di">
                                <h3>Thông tin lượt đi</h3>
                                <div class="row">
                                    <div class="col field">
                                        Tuyến xe <br />
                                        Thời gian xuất bến <br />
                                        Số lượng ghế <br />
                                        Số ghế <br />
                                        Tổng tiền lượt đi
                                    </div>

                                    <div class="col info" align="right">
                                        Sài Gòn ⇒ Rạch Giá <br />
                                        01:15 03-05-2024 <br />
                                        0 Ghế <br />
                                        <br />
                                        0đ
                                    </div>
                                </div>
                            </div>

                            <div class="chi-tiet-gia">
                                <h3>Chi tiết giá</h3>
                                <div class="row">
                                    <div class="col field">
                                        Giá vé lượt đi <br />
                                        Thanh toán <br /> 
                                        <hr id="gach-ngang"/>
                                        <br  /> 
                                        <b> Tổng tiền </b>
                                    </div>

                                    <div class="col info" align="right">
                                        0đ <br />
                                        0đ <br  /> 
                                        <br  /> 
                                        <b id="tong-tien"> 0đ </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}


export default Booking